import { GroupBox } from "react95";

export const Credits = () => {
  return (
    <>
      <GroupBox label="Welcome to my website">
        <p>
          ©️ {new Date().getFullYear()}
          Replace this text with a long description of me and the vibes. 
          How to use this website 
           We will end the page with a picture of me. 
        </p>
        <p>
          second paragraph
        </p>
      </GroupBox>
    </>
  );
};
