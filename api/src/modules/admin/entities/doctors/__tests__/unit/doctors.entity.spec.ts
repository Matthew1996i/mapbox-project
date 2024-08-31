import { DoctorsModelDTO } from "../../../../../../modules/admin/dtos/doctors";
import { DoctorEntity } from "../../doctors.entity";

describe("DoctorEntity Test", () => {
  let props: DoctorsModelDTO;
  let sut: DoctorEntity;

  beforeEach(() => {
    props = {
      CD_MEDICO: 150,
      NM_MEDICO: "teste",
    };

    sut = new DoctorEntity(props);
  });

  it("Constructor method", () => {
    expect(sut.cd_medico).toEqual(props.CD_MEDICO);
    expect(sut.nm_medico).toEqual(props.NM_MEDICO);
  });

  it("getter of cd_medico field", () => {
    expect(sut.cd_medico).toBeDefined();
    expect(sut.cd_medico).toEqual(props.CD_MEDICO);
    expect(typeof sut.cd_medico).toBe("number");
  });

  it("getter of cd_medico field", () => {
    expect(sut.nm_medico).toBeDefined();
    expect(sut.nm_medico).toEqual(props.NM_MEDICO);
    expect(typeof sut.nm_medico).toBe("string");
  });
});
