import CustomerCard from "../../../components/CustomerCard";
import styles from "./styles/customers-section.module.scss";

const comments = [
  {
    id: 1,
    comment:
      "Digift stood out from the crowd with an impressive team and even more impressive mission: harnessing the power of giftcards enterprises to support people who are restricted by banks in Nigeria.",
  },
  {
    id: 2,
    comment:
      "Digift stood out from the crowd with an impressive team and even more impressive mission: harnessing the power of giftcards enterprises to support people who are restricted by banks in Nigeria. Digift stood out from the crowd with an impressive team and even more impressive mission ",
  },
  {
    id: 3,
    comment:
      "Digift stood out from the crowd with an impressive team and even more impressive mission: harnessing the power of giftcards enterprises to support people who are restricted by banks in Nigeria.",
  },
];

const CustomerSection = () => {
  return (
    <div className={styles.customers}>
      <h3>“Hear what happy customers are saying about Digift”</h3>
      <div className={styles.customers__comments}>
        {comments.map((item) => (
          <CustomerCard ky={item.id} comment={item.comment} />
        ))}
      </div>
    </div>
  );
};

export default CustomerSection;
