import { UserDTO } from "../../../../modules/admin/dtos/user";
import { Entity } from "../../../../modules/shared/entities/entity";

export class UserEntity extends Entity<UserDTO> {
  constructor(public readonly props: UserDTO) {
    super(props);

    this.props.role = this.props.role ?? "user";
  }

  get name() {
    return this.name;
  }
  set name(value: string) {
    this.props.name = value;
  }

  get email() {
    return this.props.email;
  }
  set email(value: string) {
    this.props.email = value;
  }

  get password() {
    return this.props.password;
  }
  set password(value: string) {
    this.props.password = value;
  }

  get role() {
    return this.props.role;
  }
  set role(value: "user" | "doctor") {
    this.props.role = value;
  }

  get created_at() {
    return this.props.created_at;
  }

  get updated_at() {
    return this.updated_at;
  }
}
