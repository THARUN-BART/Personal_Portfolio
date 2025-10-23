export const EMAILJS_CONFIG = {
  serviceId: 'service_rtwtrad', 
  templateId: 'template_075ycpl',
  publicKey: 'QjjruxM8W58Gz0Fu9', 
};

// Email template variables
export interface EmailTemplateParams extends Record<string, unknown> {
  from_name: string;
  from_email: string;
  message: string;
  to_email: string;
}
