import classes from './InventoryButton.module.css';

const InventoryButton = () => {
  const handleInventoryClick = () => {
      window.open("http://127.0.0.1:8000/", "_blank", "noopener,noreferrer");
  };
  
  return (
    <button className={classes.InventoryButton} onClick={handleInventoryClick}>
    Admin Inventory
    </button>
  );
};

export default InventoryButton;