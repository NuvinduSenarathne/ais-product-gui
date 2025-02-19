import styles from "./inputWithImage.module.css";

interface InputWithImageProps {
  type: string;
  icon: string;
  placeholder: string;
}

const InputWithImage: React.FC<InputWithImageProps> = ({ type, icon, placeholder }) => {
  return (
    <div className={styles.inputContainer}>
      <i className={`bi ${icon} ${styles.inputIcon}`}></i>
      <input type={type} placeholder={placeholder} className={styles.inputField} />
    </div>
  );
};

export default InputWithImage;
