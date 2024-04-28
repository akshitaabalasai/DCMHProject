import GiftFrequency from './GiftFrequency/GiftFrequency';
import classes from './DonationForm.module.css';
import SelectAmount from './SelectAmount/SelectAmount';
import Agreement from './Agreement';
import NameInput from './NameInput';
import SubmitButton from './SubmitButton';
import InventoryButton from './InventoryButton';

const DonationForm = () => {
  return (
    <form className={classes.DonationForm} onSubmit={e => e.preventDefault()}>
      <GiftFrequency />
      <SelectAmount />
      <Agreement />
      <NameInput />
      <SubmitButton />
      <InventoryButton />
    </form>
  );
};

export default DonationForm;