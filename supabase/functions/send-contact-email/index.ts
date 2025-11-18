import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  nome: string;
  email: string;
  telefone: string;
  assunto: string;
  mensagem: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { nome, email, telefone, assunto, mensagem }: ContactEmailRequest = await req.json();

    console.log("Recebendo dados do formulário de contato:", { nome, email, telefone, assunto });

    // E-mail para a escola com os dados do contato
    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Musique <onboarding@resend.dev>",
        to: ["let548501@gmail.com"],
        subject: `Nova Mensagem de Contato - ${nome}`,
        html: `
          <h1>Nova mensagem recebida pelo formulário de contato</h1>
          <p><strong>Nome:</strong> ${nome}</p>
          <p><strong>E-mail:</strong> ${email}</p>
          <p><strong>Telefone/WhatsApp:</strong> ${telefone}</p>
          <p><strong>Assunto:</strong> ${assunto}</p>
          <p><strong>Mensagem:</strong></p>
          <p>${mensagem}</p>
          <hr>
          <p style="color: #666; font-size: 12px;">Enviado pelo Formulário de Contato do site Musique.</p>
        `,
      }),
    });

    const emailData = await emailResponse.json();
    console.log("E-mail enviado para a escola:", emailData);

    if (!emailResponse.ok) {
      throw new Error(`Erro ao enviar e-mail: ${JSON.stringify(emailData)}`);
    }

    return new Response(
      JSON.stringify({ 
        success: true,
        email: emailData
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
    console.error("Erro ao enviar e-mail:", error);
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
