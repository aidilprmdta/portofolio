export interface Comment {
  id?: string;
  name: string;
  role: string;
  text: string;
  created_at?: string;
}

export const initialComments: Comment[] = [
  {
    id: "1",
    name: "Sarah Jenkins",
    role: "UX Architect",
    text: "Suka sekali dengan visual bento grid-nya. Sangat rapi dan interaktif!",
    created_at: new Date().toISOString(),
  },
];
