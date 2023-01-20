import style from "./styles/DemoModal.module.css";

function DemoModal(props) {
  const { gifName, setOpen } = props;
  const path = `/assets/gifs/${gifName}.gif`;

  return (
    <div onClick={() => setOpen(false)}>
      <div className={style.backdrop} />
      <div className={style.modal}>
        <img src={path} />
      </div>
    </div>
  );
}

export default DemoModal;
