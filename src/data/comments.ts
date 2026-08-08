export interface Comment {
  name: string;
  role: string;
  text: string;
}

export const initialComments: Comment[] = [
  {
    name: "Sarah Jenkins",
    role: "UX Architect",
    text: "Suka sekali dengan visual bento grid-nya. Sangat rapi dan interaktif!",
  },
];
