import Map, { Marker } from "react-map-gl";
import { Divider, Skeleton } from "@mantine/core";
import { useHospitals } from "../../hooks/hospitals";

import { IoMdPin } from "react-icons/io";
import { useModals } from "@mantine/modals";
import HospitalCalledsList from "../HospitalCalledsList";
import { useAtom } from "jotai";
import { hospitalIdFiltersAtom } from "../../atoms/hospitals/hospitalIdFiltersAtom";

export default function MapComponent() {
  const modals = useModals();
  const { data: hospitals, isLoading: isHospitalsLoading } = useHospitals();
  const [, setHospitalId] = useAtom(hospitalIdFiltersAtom);

  const calledsModal = () =>
    modals.openModal({
      title: (
        <div>
          <div className="flex justify-between my-3">
            <div className="text-xl font-bold">Chamados</div>
          </div>
          <Divider />
        </div>
      ),
      size: "xl",
      children: <HospitalCalledsList />,
    });

  const mapMarkers = hospitals?.length ? (
    hospitals?.map(
      (hospital) =>
        hospital && (
          <Marker
            longitude={hospital.NR_LONGITUDE}
            latitude={hospital.NR_LATITUDE}
            anchor="bottom"
            onClick={() => {
              setHospitalId(hospital.CD_HOSPITAL ? hospital.CD_HOSPITAL : null);
              calledsModal();
            }}
          >
            <IoMdPin fontSize={30} color="red" />
          </Marker>
        )
    )
  ) : (
    <></>
  );

  return (
    <Skeleton visible={isHospitalsLoading}>
      <Map
        mapboxAccessToken={import.meta.env.VITE_MAPBOX_TOKEN}
        initialViewState={{
          longitude: -47.06816936,
          latitude: -22.9037912,
          zoom: 14,
        }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      >
        {mapMarkers}
      </Map>
    </Skeleton>
  );
}
