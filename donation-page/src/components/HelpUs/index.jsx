import classes from './HelpUs.module.css';
import HelpUsTitle from './HelpUsTitle';

const HelpUs = () => {
  return (
    <section className={classes.HelpUs}>
      <HelpUsTitle />
      <p className={classes.HelpUsParagraph}>
        "Davis Community Meals and Housing (DCMH) opened its doors in 1990 as a non-profit, non-denominational volunteer organization serving a free weekly meal to people in and around Davis who were homeless or without financial resources."
      </p>
    </section>
  );
};

export default HelpUs;