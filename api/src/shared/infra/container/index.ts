import { UserRepositoryContract } from "../../../modules/admin/repositories/contracts/user.repository.contract";
import { UserRepository } from "../../../modules/admin/repositories/users/users.repositories";
import { HashProvider } from "../../../modules/shared/providers/hash-provider/contracts/hash-provider";
import { BcryptjsHashProvider } from "../../../modules/shared/providers/hash-provider/bcryptjs-hash.provider";
import { DateProviderContracts } from "../../../modules/shared/providers/date-provider/contracts/date-provider";
import { DateProvider } from "../../../modules/shared/providers/date-provider/date-provider.provider";
import { DoctorsRepositoryContract } from "../../../modules/admin/repositories/contracts/doctors.repository.contract";
import { DoctorsRepository } from "../../../modules/admin/repositories/doctors/doctors.repositories";
import { HospitalsRepositoryContract } from "../../../modules/admin/repositories/contracts/hospitals.repository.contract";
import { HospitalsRepository } from "../../../modules/admin/repositories/hospitals/hospitals.repositories";
import { CalledsRepositoryContract } from "../../../modules/admin/repositories/contracts/calleds.repository.contract";
import { CalledsRepository } from "../../../modules/admin/repositories/calleds/calleds.repositories";

import { container } from "tsyringe";

container.registerSingleton<UserRepositoryContract>(
  "UserRepository",
  UserRepository
);

container.registerSingleton<DoctorsRepositoryContract>(
  "DoctorsRepository",
  DoctorsRepository
);

container.registerSingleton<CalledsRepositoryContract>(
  "CalledsRepository",
  CalledsRepository
);

container.registerSingleton<HospitalsRepositoryContract>(
  "HospitalsRepository",
  HospitalsRepository
);

container.registerSingleton<HashProvider>(
  "BcryptjsHashProvider",
  BcryptjsHashProvider
);

container.registerSingleton<DateProviderContracts>(
  "DateProvider",
  DateProvider
);
