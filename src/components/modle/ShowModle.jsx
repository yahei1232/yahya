import { Modal, useMantineTheme } from "@mantine/core";
import "./Modle.css";
import GitHubIcon from "@mui/icons-material/GitHub";

function ShowModle({ modalOpened, setModalOpened, d }) {
  const theme = useMantineTheme();
  console.log(d);
  const handlepost = async (e) => {
    e.preventDefault();
    setModalOpened(false);
    window.location.href = d?.git;
  };

  return (
    <Modal
      overlaycolor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayopacity={0.55}
      overlayblur={3}
      size="55%"
      opened={modalOpened}
      onClose={() => setModalOpened(false)}
    >
      <div className="PostModle">
        <div className="asd">
          <img src={d?.img} alt="" />
          <div className="colsa">
            <h1 className="title m1">{d?.title}</h1>
            <p className="par m1">{d?.desc}</p>
            <h4 className="tac m1">{d?.teck}</h4>
          </div>
        </div>

        <a href={d.git} className="PostButton" onClick={handlepost}>
          <GitHubIcon className="git" />
          go to GitHub
        </a>
      </div>
    </Modal>
  );
}

export default ShowModle;
