import { Pattern } from "../../Pattern";
import { User, UserBuilder } from "./builder";

export class BuilderDemo implements Pattern {
  show(): void {
    const u: User = new UserBuilder("Jancsi")
      .setAge(12)
      .setPhone("0123456789")
      .setAddress("asdf")
      .build();

    console.log(u.Name + " " + u.Age + " " + u.Phone + " " + u.Address);
  }
}
