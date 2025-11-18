import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ScheduleEmailRequest {
  nome: string;
  idade: string;
  email: string;
  whatsapp: string;
  modalidade: string;
  turno: string;
  mensagem: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { nome, idade, email, whatsapp, modalidade, turno, mensagem }: ScheduleEmailRequest = await req.json();

    console.log("Recebendo dados do agendamento:", { nome, idade, email, whatsapp, modalidade, turno });

    // E-mail para a escola com os dados do aluno
    const schoolEmailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Musique <onboarding@resend.dev>",
        to: ["contato@musique.com.br"], // Substitua pelo e-mail real da escola
        subject: `Novo Agendamento - ${nome}`,
        html: `
          <h1>Novo agendamento recebido pelo site Musique</h1>
          <p><strong>Nome:</strong> ${nome}</p>
          <p><strong>Idade:</strong> ${idade}</p>
          <p><strong>E-mail:</strong> ${email}</p>
          <p><strong>WhatsApp do aluno:</strong> ${whatsapp}</p>
          <p><strong>Modalidade de interesse:</strong> ${modalidade}</p>
          <p><strong>Turno preferido:</strong> ${turno}</p>
          <p><strong>Mensagem adicional:</strong> ${mensagem || 'Nenhuma'}</p>
          <hr>
          <p style="color: #666; font-size: 12px;">Enviado diretamente pelo Formulário de Agendamento.</p>
        `,
      }),
    });

    const schoolEmailData = await schoolEmailResponse.json();
    console.log("E-mail enviado para a escola:", schoolEmailData);

    if (!schoolEmailResponse.ok) {
      throw new Error(`Erro ao enviar e-mail para a escola: ${JSON.stringify(schoolEmailData)}`);
    }

    // E-mail de confirmação para o aluno
    const studentEmailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Musique <onboarding@resend.dev>",
        to: [email],
        subject: "Confirmação do seu agendamento – Musique",
        html: `
          <h1>Olá, ${nome}!</h1>
          <p>Recebemos seu agendamento e entraremos em contato pelo WhatsApp em breve para finalizar sua aula experimental.</p>
          <p><strong>Dados do seu agendamento:</strong></p>
          <ul>
            <li><strong>Modalidade:</strong> ${modalidade}</li>
            <li><strong>Turno preferido:</strong> ${turno}</li>
          </ul>
          <p>Obrigado por escolher a Musique!</p>
          <hr>
          <p style="color: #666; font-size: 12px;">Escola Musique - Música que transforma vidas</p>
        `,
      }),
    });

    const studentEmailData = await studentEmailResponse.json();
    console.log("E-mail de confirmação enviado para o aluno:", studentEmailData);

    if (!studentEmailResponse.ok) {
      throw new Error(`Erro ao enviar e-mail para o aluno: ${JSON.stringify(studentEmailData)}`);
    }

    return new Response(
      JSON.stringify({ 
        success: true,
        schoolEmail: schoolEmailData,
        studentEmail: studentEmailData
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Erro ao enviar e-mails:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
