export type WhatsAppInquiry = {
  name: string; phone: string; email: string; location: string;
  service: string; message: string; consent: boolean;
};

export function inquiryWhatsAppUrl(data: WhatsAppInquiry) {
  const text = [
    'Dopyt z lion-company.sk',
    `Meno: ${data.name.trim()}`,
    `Telefón: ${data.phone.trim()}`,
    `E-mail: ${data.email.trim()}`,
    `Obec / mesto: ${data.location.trim()}`,
    `Služba: ${data.service}`,
    `Správa: ${data.message.trim() || 'Neuvedená'}`,
    `Súhlas so spracovaním údajov na vybavenie dopytu: ${data.consent ? 'Áno' : 'Nie'}`,
  ].join('\n');
  return `https://wa.me/421945454277?text=${encodeURIComponent(text)}`;
}
