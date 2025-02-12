import Image from "next/image";
import styles from "./inputWithImage.module.css";

interface InputWithImageProps {
  type: string;
  imageUrl: string;
  placeholder: string;
}

const InputWithImage: React.FC<InputWithImageProps> = ({ type, imageUrl, placeholder }) => {
  return (
    <div className={styles.inputContainer}>
      <Image src={imageUrl} height={26} width={26} alt="Input With Image Icon" className={styles.inputImage} />
      <input type={type} placeholder={placeholder} className={styles.inputField} />
    </div>
  );
};

export default InputWithImage;

