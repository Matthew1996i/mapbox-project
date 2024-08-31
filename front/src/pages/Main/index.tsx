import FoatingButtons from "../../components/FloatingButton";
import MapComponent from "../../components/MapComponent";
import { DefaultContainer } from "../../shared/styles/Container/Style.default";
import FloatingMenu from "../../components/FloatingMenu";
import ExitButton from "../../components/ExitButton";

export default function Main() {
  // const isAllowed = usePermissions();
  // console.log(isAllowed);

  return (
    <DefaultContainer>
      <FoatingButtons position={{ top: 20, left: 20 }}>
        <ExitButton />
      </FoatingButtons>
      <FoatingButtons position={{ top: 20, right: 20 }}>
        <FloatingMenu />
      </FoatingButtons>
      <MapComponent />
    </DefaultContainer>
  );
}
