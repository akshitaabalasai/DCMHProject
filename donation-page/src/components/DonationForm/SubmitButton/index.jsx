import classes from './SubmitButton.module.css';

const SubmitButton = () => {
  const handleDonateClick = () => {
    window.open("https://interland3.donorperfect.net/weblink/weblink.aspx?name=E357416&id=1", "_blank", "noopener,noreferrer");
  };

  return (
    <button className={classes.DonateButton} onClick={handleDonateClick}>
      Donate now
    </button>
  );
};

export default SubmitButton;
