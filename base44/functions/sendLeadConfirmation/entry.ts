import { createClientFromRequest } from 'npm:@base44/sdk@0.8.52';

const clean = (value) => String(value ?? '').replace(/[\r\n<>]/g, ' ').slice(0, 80).trim();

export default async function(req) {
  try {
    const { name, email } = await req.json();
    const to = clean(email);
    const firstName = clean(name).split(' ')[0] || 'there';

    if (!to || !/^\S+@\S+\.\S+$/.test(to)) {
      return Response.json({ error: 'A valid recipient email is required' }, { status: 400 });
    }

    const base44 = createClientFromRequest(req);

    await base44.asServiceRole.integrations.Core.SendEmail({
      to,
      subject: 'Your consultation request has been received',
      from_name: 'Prestige Estate Management',
      text: `Dear ${firstName},

Thank you for entrusting us with the first details of your estate.

Your request has reached our principal team, and a dedicated advisor will contact you within one business day to arrange your private consultation.

Should you wish to reach us directly in the meantime, you may write to info@prestigeestatemanagement.com or call (406) 555-0100.

With appreciation,
Prestige Estate Management
Bozeman, Montana`,
    });

    return Response.json({ ok: true });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}