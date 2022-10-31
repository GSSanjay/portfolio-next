import axios from "axios";

export type ContactProps = {
  data: {
    name: string;
  };
};

export const Contact = ({ data }: ContactProps) => {
  return (
    <div id="contact">
      <h1>{data.name}</h1>
    </div>
  );
};
