export type ContactPayload = {
  name: string;
  email: string;
  company: string;
  role: string;
  help: string;
  message: string;
};

/** Frontend mock — replace with real API later */
export async function submitContactForm(data: ContactPayload): Promise<void> {
  await new Promise((r) => setTimeout(r, 900));
  if (!data.name || !data.email || !data.message) {
    throw new Error("Missing required fields");
  }
}
