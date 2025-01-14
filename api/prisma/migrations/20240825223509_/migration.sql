-- CreateEnum
CREATE TYPE "UserRoles" AS ENUM ('user', 'doctor');

-- CreateEnum
CREATE TYPE "IEChamado" AS ENUM ('I', 'P');

-- CreateEnum
CREATE TYPE "IESexo" AS ENUM ('F', 'M');

-- CreateEnum
CREATE TYPE "IEStatus" AS ENUM ('A', 'E', 'C');

-- CreateTable
CREATE TABLE "admin_users" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "role" "UserRoles" NOT NULL DEFAULT 'user',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "admin_users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HOSPITAL" (
    "CD_HOSPITAL" SERIAL NOT NULL,
    "NM_HOSPITAL" TEXT NOT NULL,
    "NR_LATITUDE" FLOAT NOT NULL,
    "NR_LONGITUDE" FLOAT NOT NULL,

    CONSTRAINT "HOSPITAL_pkey" PRIMARY KEY ("CD_HOSPITAL")
);

-- CreateTable
CREATE TABLE "MEDICO" (
    "CD_MEDICO" SERIAL NOT NULL,
    "NM_MEDICO" TEXT NOT NULL,

    CONSTRAINT "MEDICO_pkey" PRIMARY KEY ("CD_MEDICO")
);

-- CreateTable
CREATE TABLE "CHAMADO" (
    "NR_CHAMADO" SERIAL NOT NULL,
    "IE_TIPO_CHAMADO" "IEChamado" NOT NULL DEFAULT 'I',
    "NM_PACIENTE" TEXT NOT NULL,
    "IE_SEXO" "IESexo" NOT NULL,
    "IE_STATUS_CHAMADO" "IEStatus" NOT NULL DEFAULT 'E',
    "CD_MEDICO" INTEGER,
    "CD_HOSPITAL" INTEGER NOT NULL,

    CONSTRAINT "CHAMADO_pkey" PRIMARY KEY ("NR_CHAMADO")
);

-- CreateIndex
CREATE UNIQUE INDEX "admin_users_email_key" ON "admin_users"("email");

-- AddForeignKey
ALTER TABLE "CHAMADO" ADD CONSTRAINT "CHAMADO_CD_MEDICO_fkey" FOREIGN KEY ("CD_MEDICO") REFERENCES "MEDICO"("CD_MEDICO") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CHAMADO" ADD CONSTRAINT "CHAMADO_CD_HOSPITAL_fkey" FOREIGN KEY ("CD_HOSPITAL") REFERENCES "HOSPITAL"("CD_HOSPITAL") ON DELETE RESTRICT ON UPDATE CASCADE;

INSERT INTO "HOSPITAL" ("CD_HOSPITAL","NM_HOSPITAL","NR_LATITUDE","NR_LONGITUDE") values ('244','HOSPITAL 1',-22.9037912,-47.06816936); 
INSERT INTO "HOSPITAL" ("CD_HOSPITAL","NM_HOSPITAL","NR_LATITUDE","NR_LONGITUDE") values ('258','HOSPITAL 2',-22.8943904,-47.06938827); 
INSERT INTO "HOSPITAL" ("CD_HOSPITAL","NM_HOSPITAL","NR_LATITUDE","NR_LONGITUDE") values ('295','HOSPITAL 3',-22.9176917,-47.0594874); 
INSERT INTO "HOSPITAL" ("CD_HOSPITAL","NM_HOSPITAL","NR_LATITUDE","NR_LONGITUDE") values ('309','HOSPITAL 4',-22.9084372,-47.05499263); 
INSERT INTO "HOSPITAL" ("CD_HOSPITAL","NM_HOSPITAL","NR_LATITUDE","NR_LONGITUDE") values ('310','HOSPITAL 5',-22.8408133,-47.05186743); 
INSERT INTO "HOSPITAL" ("CD_HOSPITAL","NM_HOSPITAL","NR_LATITUDE","NR_LONGITUDE") values ('315','HOSPITAL 6',-22.9002002,-47.05476596); 
INSERT INTO "HOSPITAL" ("CD_HOSPITAL","NM_HOSPITAL","NR_LATITUDE","NR_LONGITUDE") values ('318','HOSPITAL 7',-22.9042279,-47.06220784); 
INSERT INTO "HOSPITAL" ("CD_HOSPITAL","NM_HOSPITAL","NR_LATITUDE","NR_LONGITUDE") values ('322','HOSPITAL 8',-22.8088459,-47.06530754); 
INSERT INTO "HOSPITAL" ("CD_HOSPITAL","NM_HOSPITAL","NR_LATITUDE","NR_LONGITUDE") values ('327','HOSPITAL 9',-22.8925509,-47.06406772); 
INSERT INTO "HOSPITAL" ("CD_HOSPITAL","NM_HOSPITAL","NR_LATITUDE","NR_LONGITUDE") values ('334','HOSPITAL 10',-22.9010922,-47.05554787); 

INSERT INTO "MEDICO" ("CD_MEDICO", "NM_MEDICO") VALUES (1, 'MEDICO 1');
INSERT INTO "MEDICO" ("CD_MEDICO", "NM_MEDICO") VALUES (2, 'MEDICO 2');
INSERT INTO "MEDICO" ("CD_MEDICO", "NM_MEDICO") VALUES (3, 'MEDICO 3');

INSERT INTO "CHAMADO" ("NR_CHAMADO","CD_HOSPITAL","IE_TIPO_CHAMADO","NM_PACIENTE","IE_SEXO","IE_STATUS_CHAMADO","CD_MEDICO") values (145363850,'322','I','PACIENTE 340','M','A',null);
INSERT INTO "CHAMADO" ("NR_CHAMADO","CD_HOSPITAL","IE_TIPO_CHAMADO","NM_PACIENTE","IE_SEXO","IE_STATUS_CHAMADO","CD_MEDICO") values (143610890,'309','I','PACIENTE 115','F','A',null);
INSERT INTO "CHAMADO" ("NR_CHAMADO","CD_HOSPITAL","IE_TIPO_CHAMADO","NM_PACIENTE","IE_SEXO","IE_STATUS_CHAMADO","CD_MEDICO") values (141249360,'309','P','PACIENTE 173','F','A',null);
INSERT INTO "CHAMADO" ("NR_CHAMADO","CD_HOSPITAL","IE_TIPO_CHAMADO","NM_PACIENTE","IE_SEXO","IE_STATUS_CHAMADO","CD_MEDICO") values (145374588,'322','I','PACIENTE 349','M','A',null);
INSERT INTO "CHAMADO" ("NR_CHAMADO","CD_HOSPITAL","IE_TIPO_CHAMADO","NM_PACIENTE","IE_SEXO","IE_STATUS_CHAMADO","CD_MEDICO") values (143904046,'322','I','PACIENTE 415','F','A',null);
INSERT INTO "CHAMADO" ("NR_CHAMADO","CD_HOSPITAL","IE_TIPO_CHAMADO","NM_PACIENTE","IE_SEXO","IE_STATUS_CHAMADO","CD_MEDICO") values (141209722,'322','I','PACIENTE 432','M','A',null);
INSERT INTO "CHAMADO" ("NR_CHAMADO","CD_HOSPITAL","IE_TIPO_CHAMADO","NM_PACIENTE","IE_SEXO","IE_STATUS_CHAMADO","CD_MEDICO") values (145691083,'310','I','PACIENTE 203','M','A',null);
INSERT INTO "CHAMADO" ("NR_CHAMADO","CD_HOSPITAL","IE_TIPO_CHAMADO","NM_PACIENTE","IE_SEXO","IE_STATUS_CHAMADO","CD_MEDICO") values (142619243,'322','I','PACIENTE 366','M','A',null);
INSERT INTO "CHAMADO" ("NR_CHAMADO","CD_HOSPITAL","IE_TIPO_CHAMADO","NM_PACIENTE","IE_SEXO","IE_STATUS_CHAMADO","CD_MEDICO") values (143917078,'309','I','PACIENTE 120','F','A',null);
INSERT INTO "CHAMADO" ("NR_CHAMADO","CD_HOSPITAL","IE_TIPO_CHAMADO","NM_PACIENTE","IE_SEXO","IE_STATUS_CHAMADO","CD_MEDICO") values (142221569,'322','P','PACIENTE 306','F','A',null);
INSERT INTO "CHAMADO" ("NR_CHAMADO","CD_HOSPITAL","IE_TIPO_CHAMADO","NM_PACIENTE","IE_SEXO","IE_STATUS_CHAMADO","CD_MEDICO") values (145460361,'318','I','PACIENTE 252','F','A',null);
INSERT INTO "CHAMADO" ("NR_CHAMADO","CD_HOSPITAL","IE_TIPO_CHAMADO","NM_PACIENTE","IE_SEXO","IE_STATUS_CHAMADO","CD_MEDICO") values (145957971,'322','P','PACIENTE 429','M','A',null);
INSERT INTO "CHAMADO" ("NR_CHAMADO","CD_HOSPITAL","IE_TIPO_CHAMADO","NM_PACIENTE","IE_SEXO","IE_STATUS_CHAMADO","CD_MEDICO") values (145348452,'327','P','PACIENTE 473','M','A',null);
INSERT INTO "CHAMADO" ("NR_CHAMADO","CD_HOSPITAL","IE_TIPO_CHAMADO","NM_PACIENTE","IE_SEXO","IE_STATUS_CHAMADO","CD_MEDICO") values (147073714,'244','I','PACIENTE 29','M','A',null);
INSERT INTO "CHAMADO" ("NR_CHAMADO","CD_HOSPITAL","IE_TIPO_CHAMADO","NM_PACIENTE","IE_SEXO","IE_STATUS_CHAMADO","CD_MEDICO") values (143446085,'318','I','PACIENTE 259','F','A',null);
INSERT INTO "CHAMADO" ("NR_CHAMADO","CD_HOSPITAL","IE_TIPO_CHAMADO","NM_PACIENTE","IE_SEXO","IE_STATUS_CHAMADO","CD_MEDICO") values (146971489,'318','P','PACIENTE 265','M','A',null);
INSERT INTO "CHAMADO" ("NR_CHAMADO","CD_HOSPITAL","IE_TIPO_CHAMADO","NM_PACIENTE","IE_SEXO","IE_STATUS_CHAMADO","CD_MEDICO") values (143903762,'322','I','PACIENTE 278','F','A',null);
INSERT INTO "CHAMADO" ("NR_CHAMADO","CD_HOSPITAL","IE_TIPO_CHAMADO","NM_PACIENTE","IE_SEXO","IE_STATUS_CHAMADO","CD_MEDICO") values (142968162,'244','I','PACIENTE 3','M','A',null);
INSERT INTO "CHAMADO" ("NR_CHAMADO","CD_HOSPITAL","IE_TIPO_CHAMADO","NM_PACIENTE","IE_SEXO","IE_STATUS_CHAMADO","CD_MEDICO") values (145348453,'327','P','PACIENTE 474','M','A',null);
INSERT INTO "CHAMADO" ("NR_CHAMADO","CD_HOSPITAL","IE_TIPO_CHAMADO","NM_PACIENTE","IE_SEXO","IE_STATUS_CHAMADO","CD_MEDICO") values (147422698,'322','I','PACIENTE 275','F','A',null);
INSERT INTO "CHAMADO" ("NR_CHAMADO","CD_HOSPITAL","IE_TIPO_CHAMADO","NM_PACIENTE","IE_SEXO","IE_STATUS_CHAMADO","CD_MEDICO") values (142964056,'334','I','PACIENTE 501','M','A',null);
INSERT INTO "CHAMADO" ("NR_CHAMADO","CD_HOSPITAL","IE_TIPO_CHAMADO","NM_PACIENTE","IE_SEXO","IE_STATUS_CHAMADO","CD_MEDICO") values (142778269,'315','I','PACIENTE 218','F','A',null);
INSERT INTO "CHAMADO" ("NR_CHAMADO","CD_HOSPITAL","IE_TIPO_CHAMADO","NM_PACIENTE","IE_SEXO","IE_STATUS_CHAMADO","CD_MEDICO") values (146730927,'309','I','PACIENTE 139','M','A',null);
INSERT INTO "CHAMADO" ("NR_CHAMADO","CD_HOSPITAL","IE_TIPO_CHAMADO","NM_PACIENTE","IE_SEXO","IE_STATUS_CHAMADO","CD_MEDICO") values (146334797,'309','I','PACIENTE 121','F','A',null);
INSERT INTO "CHAMADO" ("NR_CHAMADO","CD_HOSPITAL","IE_TIPO_CHAMADO","NM_PACIENTE","IE_SEXO","IE_STATUS_CHAMADO","CD_MEDICO") values (143746040,'295','I','PACIENTE 97','F','A',null);
INSERT INTO "CHAMADO" ("NR_CHAMADO","CD_HOSPITAL","IE_TIPO_CHAMADO","NM_PACIENTE","IE_SEXO","IE_STATUS_CHAMADO","CD_MEDICO") values (143459013,'309','P','PACIENTE 122','M','A',null);
INSERT INTO "CHAMADO" ("NR_CHAMADO","CD_HOSPITAL","IE_TIPO_CHAMADO","NM_PACIENTE","IE_SEXO","IE_STATUS_CHAMADO","CD_MEDICO") values (146684668,'258','I','PACIENTE 62','M','A',null);
INSERT INTO "CHAMADO" ("NR_CHAMADO","CD_HOSPITAL","IE_TIPO_CHAMADO","NM_PACIENTE","IE_SEXO","IE_STATUS_CHAMADO","CD_MEDICO") values (142335847,'244','I','PACIENTE 1','F','A',null);
INSERT INTO "CHAMADO" ("NR_CHAMADO","CD_HOSPITAL","IE_TIPO_CHAMADO","NM_PACIENTE","IE_SEXO","IE_STATUS_CHAMADO","CD_MEDICO") values (143300365,'295','I','PACIENTE 92','F','A',null);
INSERT INTO "CHAMADO" ("NR_CHAMADO","CD_HOSPITAL","IE_TIPO_CHAMADO","NM_PACIENTE","IE_SEXO","IE_STATUS_CHAMADO","CD_MEDICO") values (142598763,'327','I','PACIENTE 497','M','A',null);
INSERT INTO "CHAMADO" ("NR_CHAMADO","CD_HOSPITAL","IE_TIPO_CHAMADO","NM_PACIENTE","IE_SEXO","IE_STATUS_CHAMADO","CD_MEDICO") values (141201314,'309','I','PACIENTE 170','F','A',null);
INSERT INTO "CHAMADO" ("NR_CHAMADO","CD_HOSPITAL","IE_TIPO_CHAMADO","NM_PACIENTE","IE_SEXO","IE_STATUS_CHAMADO","CD_MEDICO") values (144127609,'322','I','PACIENTE 394','F','A',null);
INSERT INTO "CHAMADO" ("NR_CHAMADO","CD_HOSPITAL","IE_TIPO_CHAMADO","NM_PACIENTE","IE_SEXO","IE_STATUS_CHAMADO","CD_MEDICO") values (147074000,'315','I','PACIENTE 222','M','A',null);
INSERT INTO "CHAMADO" ("NR_CHAMADO","CD_HOSPITAL","IE_TIPO_CHAMADO","NM_PACIENTE","IE_SEXO","IE_STATUS_CHAMADO","CD_MEDICO") values (143949068,'244','I','PACIENTE 28','F','A',null);
INSERT INTO "CHAMADO" ("NR_CHAMADO","CD_HOSPITAL","IE_TIPO_CHAMADO","NM_PACIENTE","IE_SEXO","IE_STATUS_CHAMADO","CD_MEDICO") values (142702141,'309','I','PACIENTE 178','M','A',null);
INSERT INTO "CHAMADO" ("NR_CHAMADO","CD_HOSPITAL","IE_TIPO_CHAMADO","NM_PACIENTE","IE_SEXO","IE_STATUS_CHAMADO","CD_MEDICO") values (145915317,'309','I','PACIENTE 150','F','A',null);
INSERT INTO "CHAMADO" ("NR_CHAMADO","CD_HOSPITAL","IE_TIPO_CHAMADO","NM_PACIENTE","IE_SEXO","IE_STATUS_CHAMADO","CD_MEDICO") values (144220046,'244','P','PACIENTE 33','M','A',null);
INSERT INTO "CHAMADO" ("NR_CHAMADO","CD_HOSPITAL","IE_TIPO_CHAMADO","NM_PACIENTE","IE_SEXO","IE_STATUS_CHAMADO","CD_MEDICO") values (142851839,'310','P','PACIENTE 212','M','A',null);
INSERT INTO "CHAMADO" ("NR_CHAMADO","CD_HOSPITAL","IE_TIPO_CHAMADO","NM_PACIENTE","IE_SEXO","IE_STATUS_CHAMADO","CD_MEDICO") values (146807702,'327','I','PACIENTE 500','M','A',null);
INSERT INTO "CHAMADO" ("NR_CHAMADO","CD_HOSPITAL","IE_TIPO_CHAMADO","NM_PACIENTE","IE_SEXO","IE_STATUS_CHAMADO","CD_MEDICO") values (146986360,'258','I','PACIENTE 66','M','A',null);
INSERT INTO "CHAMADO" ("NR_CHAMADO","CD_HOSPITAL","IE_TIPO_CHAMADO","NM_PACIENTE","IE_SEXO","IE_STATUS_CHAMADO","CD_MEDICO") values (146707011,'322','P','PACIENTE 388','F','A',null);
INSERT INTO "CHAMADO" ("NR_CHAMADO","CD_HOSPITAL","IE_TIPO_CHAMADO","NM_PACIENTE","IE_SEXO","IE_STATUS_CHAMADO","CD_MEDICO") values (146139354,'244','P','PACIENTE 32','F','A',null);
INSERT INTO "CHAMADO" ("NR_CHAMADO","CD_HOSPITAL","IE_TIPO_CHAMADO","NM_PACIENTE","IE_SEXO","IE_STATUS_CHAMADO","CD_MEDICO") values (143744346,'295','I','PACIENTE 102','F','A',null);
INSERT INTO "CHAMADO" ("NR_CHAMADO","CD_HOSPITAL","IE_TIPO_CHAMADO","NM_PACIENTE","IE_SEXO","IE_STATUS_CHAMADO","CD_MEDICO") values (145752380,'322','I','PACIENTE 439','F','A',null);
INSERT INTO "CHAMADO" ("NR_CHAMADO","CD_HOSPITAL","IE_TIPO_CHAMADO","NM_PACIENTE","IE_SEXO","IE_STATUS_CHAMADO","CD_MEDICO") values (141163051,'327','I','PACIENTE 492','M','A',null);
INSERT INTO "CHAMADO" ("NR_CHAMADO","CD_HOSPITAL","IE_TIPO_CHAMADO","NM_PACIENTE","IE_SEXO","IE_STATUS_CHAMADO","CD_MEDICO") values (142833750,'322','I','PACIENTE 318','F','A',null);
INSERT INTO "CHAMADO" ("NR_CHAMADO","CD_HOSPITAL","IE_TIPO_CHAMADO","NM_PACIENTE","IE_SEXO","IE_STATUS_CHAMADO","CD_MEDICO") values (141766494,'315','I','PACIENTE 224','F','A',null);
INSERT INTO "CHAMADO" ("NR_CHAMADO","CD_HOSPITAL","IE_TIPO_CHAMADO","NM_PACIENTE","IE_SEXO","IE_STATUS_CHAMADO","CD_MEDICO") values (147165686,'295','I','PACIENTE 98','M','A',null);
INSERT INTO "CHAMADO" ("NR_CHAMADO","CD_HOSPITAL","IE_TIPO_CHAMADO","NM_PACIENTE","IE_SEXO","IE_STATUS_CHAMADO","CD_MEDICO") values (146945198,'309','P','PACIENTE 119','F','A',null);
INSERT INTO "CHAMADO" ("NR_CHAMADO","CD_HOSPITAL","IE_TIPO_CHAMADO","NM_PACIENTE","IE_SEXO","IE_STATUS_CHAMADO","CD_MEDICO") values (143576339,'309','I','PACIENTE 144','F','A',null);
INSERT INTO "CHAMADO" ("NR_CHAMADO","CD_HOSPITAL","IE_TIPO_CHAMADO","NM_PACIENTE","IE_SEXO","IE_STATUS_CHAMADO","CD_MEDICO") values (143928136,'322','I','PACIENTE 344','F','A',null);
INSERT INTO "CHAMADO" ("NR_CHAMADO","CD_HOSPITAL","IE_TIPO_CHAMADO","NM_PACIENTE","IE_SEXO","IE_STATUS_CHAMADO","CD_MEDICO") values (146684379,'258','I','PACIENTE 70','M','A',null);
INSERT INTO "CHAMADO" ("NR_CHAMADO","CD_HOSPITAL","IE_TIPO_CHAMADO","NM_PACIENTE","IE_SEXO","IE_STATUS_CHAMADO","CD_MEDICO") values (143282744,'309','I','PACIENTE 200','F','A',null);
INSERT INTO "CHAMADO" ("NR_CHAMADO","CD_HOSPITAL","IE_TIPO_CHAMADO","NM_PACIENTE","IE_SEXO","IE_STATUS_CHAMADO","CD_MEDICO") values (142546253,'322','I','PACIENTE 286','F','A',null);
INSERT INTO "CHAMADO" ("NR_CHAMADO","CD_HOSPITAL","IE_TIPO_CHAMADO","NM_PACIENTE","IE_SEXO","IE_STATUS_CHAMADO","CD_MEDICO") values (146736667,'322','I','PACIENTE 319','M','A',null);
INSERT INTO "CHAMADO" ("NR_CHAMADO","CD_HOSPITAL","IE_TIPO_CHAMADO","NM_PACIENTE","IE_SEXO","IE_STATUS_CHAMADO","CD_MEDICO") values (144486210,'327','P','PACIENTE 475','M','A',null);
INSERT INTO "CHAMADO" ("NR_CHAMADO","CD_HOSPITAL","IE_TIPO_CHAMADO","NM_PACIENTE","IE_SEXO","IE_STATUS_CHAMADO","CD_MEDICO") values (142470305,'295','I','PACIENTE 86','F','A',null);
INSERT INTO "CHAMADO" ("NR_CHAMADO","CD_HOSPITAL","IE_TIPO_CHAMADO","NM_PACIENTE","IE_SEXO","IE_STATUS_CHAMADO","CD_MEDICO") values (146576878,'327','I','PACIENTE 470','M','A',null);
INSERT INTO "CHAMADO" ("NR_CHAMADO","CD_HOSPITAL","IE_TIPO_CHAMADO","NM_PACIENTE","IE_SEXO","IE_STATUS_CHAMADO","CD_MEDICO") values (144988014,'322','I','PACIENTE 282','F','A',null);
INSERT INTO "CHAMADO" ("NR_CHAMADO","CD_HOSPITAL","IE_TIPO_CHAMADO","NM_PACIENTE","IE_SEXO","IE_STATUS_CHAMADO","CD_MEDICO") values (143560494,'309','P','PACIENTE 152','M','A',null);
INSERT INTO "CHAMADO" ("NR_CHAMADO","CD_HOSPITAL","IE_TIPO_CHAMADO","NM_PACIENTE","IE_SEXO","IE_STATUS_CHAMADO","CD_MEDICO") values (146101956,'327','P','PACIENTE 495','M','A',null);
INSERT INTO "CHAMADO" ("NR_CHAMADO","CD_HOSPITAL","IE_TIPO_CHAMADO","NM_PACIENTE","IE_SEXO","IE_STATUS_CHAMADO","CD_MEDICO") values (145250035,'309','P','PACIENTE 202','F','A',null);
INSERT INTO "CHAMADO" ("NR_CHAMADO","CD_HOSPITAL","IE_TIPO_CHAMADO","NM_PACIENTE","IE_SEXO","IE_STATUS_CHAMADO","CD_MEDICO") values (141257133,'322','P','PACIENTE 431','M','A',null);
INSERT INTO "CHAMADO" ("NR_CHAMADO","CD_HOSPITAL","IE_TIPO_CHAMADO","NM_PACIENTE","IE_SEXO","IE_STATUS_CHAMADO","CD_MEDICO") values (142544618,'309','I','PACIENTE 124','M','A',null);
INSERT INTO "CHAMADO" ("NR_CHAMADO","CD_HOSPITAL","IE_TIPO_CHAMADO","NM_PACIENTE","IE_SEXO","IE_STATUS_CHAMADO","CD_MEDICO") values (142389846,'322','I','PACIENTE 323','F','A',null);
INSERT INTO "CHAMADO" ("NR_CHAMADO","CD_HOSPITAL","IE_TIPO_CHAMADO","NM_PACIENTE","IE_SEXO","IE_STATUS_CHAMADO","CD_MEDICO") values (144460216,'318','P','PACIENTE 256','F','A',null);
INSERT INTO "CHAMADO" ("NR_CHAMADO","CD_HOSPITAL","IE_TIPO_CHAMADO","NM_PACIENTE","IE_SEXO","IE_STATUS_CHAMADO","CD_MEDICO") values (142944304,'322','I','PACIENTE 292','F','A',null);
INSERT INTO "CHAMADO" ("NR_CHAMADO","CD_HOSPITAL","IE_TIPO_CHAMADO","NM_PACIENTE","IE_SEXO","IE_STATUS_CHAMADO","CD_MEDICO") values (143288824,'309','I','PACIENTE 175','F','A',null);
INSERT INTO "CHAMADO" ("NR_CHAMADO","CD_HOSPITAL","IE_TIPO_CHAMADO","NM_PACIENTE","IE_SEXO","IE_STATUS_CHAMADO","CD_MEDICO") values (141746935,'315','I','PACIENTE 227','F','A',null);
INSERT INTO "CHAMADO" ("NR_CHAMADO","CD_HOSPITAL","IE_TIPO_CHAMADO","NM_PACIENTE","IE_SEXO","IE_STATUS_CHAMADO","CD_MEDICO") values (143202023,'322','P','PACIENTE 401','F','A',null);
INSERT INTO "CHAMADO" ("NR_CHAMADO","CD_HOSPITAL","IE_TIPO_CHAMADO","NM_PACIENTE","IE_SEXO","IE_STATUS_CHAMADO","CD_MEDICO") values (143569351,'244','I','PACIENTE 52','F','A',null);
INSERT INTO "CHAMADO" ("NR_CHAMADO","CD_HOSPITAL","IE_TIPO_CHAMADO","NM_PACIENTE","IE_SEXO","IE_STATUS_CHAMADO","CD_MEDICO") values (145852847,'309','I','PACIENTE 118','F','A',null);
INSERT INTO "CHAMADO" ("NR_CHAMADO","CD_HOSPITAL","IE_TIPO_CHAMADO","NM_PACIENTE","IE_SEXO","IE_STATUS_CHAMADO","CD_MEDICO") values (141193808,'244','I','PACIENTE 46','F','A',null);
INSERT INTO "CHAMADO" ("NR_CHAMADO","CD_HOSPITAL","IE_TIPO_CHAMADO","NM_PACIENTE","IE_SEXO","IE_STATUS_CHAMADO","CD_MEDICO") values (143439739,'322','I','PACIENTE 337','M','A',null);
INSERT INTO "CHAMADO" ("NR_CHAMADO","CD_HOSPITAL","IE_TIPO_CHAMADO","NM_PACIENTE","IE_SEXO","IE_STATUS_CHAMADO","CD_MEDICO") values (142977717,'322','P','PACIENTE 365','M','A',null);
INSERT INTO "CHAMADO" ("NR_CHAMADO","CD_HOSPITAL","IE_TIPO_CHAMADO","NM_PACIENTE","IE_SEXO","IE_STATUS_CHAMADO","CD_MEDICO") values (146753358,'309','I','PACIENTE 134','M','A',null);
INSERT INTO "CHAMADO" ("NR_CHAMADO","CD_HOSPITAL","IE_TIPO_CHAMADO","NM_PACIENTE","IE_SEXO","IE_STATUS_CHAMADO","CD_MEDICO") values (146540490,'322','I','PACIENTE 295','F','A',null);
INSERT INTO "CHAMADO" ("NR_CHAMADO","CD_HOSPITAL","IE_TIPO_CHAMADO","NM_PACIENTE","IE_SEXO","IE_STATUS_CHAMADO","CD_MEDICO") values (144180647,'315','P','PACIENTE 226','F','A',null);
INSERT INTO "CHAMADO" ("NR_CHAMADO","CD_HOSPITAL","IE_TIPO_CHAMADO","NM_PACIENTE","IE_SEXO","IE_STATUS_CHAMADO","CD_MEDICO") values (143139993,'322','I','PACIENTE 291','M','A',null);
INSERT INTO "CHAMADO" ("NR_CHAMADO","CD_HOSPITAL","IE_TIPO_CHAMADO","NM_PACIENTE","IE_SEXO","IE_STATUS_CHAMADO","CD_MEDICO") values (142836084,'322','I','PACIENTE 322','F','A',null);
INSERT INTO "CHAMADO" ("NR_CHAMADO","CD_HOSPITAL","IE_TIPO_CHAMADO","NM_PACIENTE","IE_SEXO","IE_STATUS_CHAMADO","CD_MEDICO") values (142265417,'322','I','PACIENTE 382','M','A',null);
INSERT INTO "CHAMADO" ("NR_CHAMADO","CD_HOSPITAL","IE_TIPO_CHAMADO","NM_PACIENTE","IE_SEXO","IE_STATUS_CHAMADO","CD_MEDICO") values (142548346,'322','I','PACIENTE 301','F','A',null);
INSERT INTO "CHAMADO" ("NR_CHAMADO","CD_HOSPITAL","IE_TIPO_CHAMADO","NM_PACIENTE","IE_SEXO","IE_STATUS_CHAMADO","CD_MEDICO") values (143991233,'309','I','PACIENTE 153','M','A',null);
INSERT INTO "CHAMADO" ("NR_CHAMADO","CD_HOSPITAL","IE_TIPO_CHAMADO","NM_PACIENTE","IE_SEXO","IE_STATUS_CHAMADO","CD_MEDICO") values (144179962,'295','I','PACIENTE 99','F','A',null);
INSERT INTO "CHAMADO" ("NR_CHAMADO","CD_HOSPITAL","IE_TIPO_CHAMADO","NM_PACIENTE","IE_SEXO","IE_STATUS_CHAMADO","CD_MEDICO") values (147222850,'318','I','PACIENTE 269','M','A',null);
INSERT INTO "CHAMADO" ("NR_CHAMADO","CD_HOSPITAL","IE_TIPO_CHAMADO","NM_PACIENTE","IE_SEXO","IE_STATUS_CHAMADO","CD_MEDICO") values (144603347,'318','I','PACIENTE 258','F','A',null);
INSERT INTO "CHAMADO" ("NR_CHAMADO","CD_HOSPITAL","IE_TIPO_CHAMADO","NM_PACIENTE","IE_SEXO","IE_STATUS_CHAMADO","CD_MEDICO") values (146841177,'322','I','PACIENTE 271','M','A',null);
INSERT INTO "CHAMADO" ("NR_CHAMADO","CD_HOSPITAL","IE_TIPO_CHAMADO","NM_PACIENTE","IE_SEXO","IE_STATUS_CHAMADO","CD_MEDICO") values (142391798,'309','P','PACIENTE 117','F','A',null);
INSERT INTO "CHAMADO" ("NR_CHAMADO","CD_HOSPITAL","IE_TIPO_CHAMADO","NM_PACIENTE","IE_SEXO","IE_STATUS_CHAMADO","CD_MEDICO") values (147366485,'327','P','PACIENTE 477','F','A',null);
INSERT INTO "CHAMADO" ("NR_CHAMADO","CD_HOSPITAL","IE_TIPO_CHAMADO","NM_PACIENTE","IE_SEXO","IE_STATUS_CHAMADO","CD_MEDICO") values (143744202,'295','I','PACIENTE 103','F','A',null);
INSERT INTO "CHAMADO" ("NR_CHAMADO","CD_HOSPITAL","IE_TIPO_CHAMADO","NM_PACIENTE","IE_SEXO","IE_STATUS_CHAMADO","CD_MEDICO") values (144950088,'327','I','PACIENTE 479','M','A',null);
INSERT INTO "CHAMADO" ("NR_CHAMADO","CD_HOSPITAL","IE_TIPO_CHAMADO","NM_PACIENTE","IE_SEXO","IE_STATUS_CHAMADO","CD_MEDICO") values (145503142,'318','P','PACIENTE 233','F','A',null);
INSERT INTO "CHAMADO" ("NR_CHAMADO","CD_HOSPITAL","IE_TIPO_CHAMADO","NM_PACIENTE","IE_SEXO","IE_STATUS_CHAMADO","CD_MEDICO") values (145503144,'318','P','PACIENTE 235','F','A',null);
INSERT INTO "CHAMADO" ("NR_CHAMADO","CD_HOSPITAL","IE_TIPO_CHAMADO","NM_PACIENTE","IE_SEXO","IE_STATUS_CHAMADO","CD_MEDICO") values (141109862,'309','I','PACIENTE 162','F','A',null);
INSERT INTO "CHAMADO" ("NR_CHAMADO","CD_HOSPITAL","IE_TIPO_CHAMADO","NM_PACIENTE","IE_SEXO","IE_STATUS_CHAMADO","CD_MEDICO") values (141327454,'322','I','PACIENTE 369','F','A',null);
INSERT INTO "CHAMADO" ("NR_CHAMADO","CD_HOSPITAL","IE_TIPO_CHAMADO","NM_PACIENTE","IE_SEXO","IE_STATUS_CHAMADO","CD_MEDICO") values (145626559,'244','P','PACIENTE 7','M','A',null);
INSERT INTO "CHAMADO" ("NR_CHAMADO","CD_HOSPITAL","IE_TIPO_CHAMADO","NM_PACIENTE","IE_SEXO","IE_STATUS_CHAMADO","CD_MEDICO") values (141289465,'295','I','PACIENTE 106','M','A',null);
INSERT INTO "CHAMADO" ("NR_CHAMADO","CD_HOSPITAL","IE_TIPO_CHAMADO","NM_PACIENTE","IE_SEXO","IE_STATUS_CHAMADO","CD_MEDICO") values (145504830,'318','P','PACIENTE 242','F','A',null);
INSERT INTO "CHAMADO" ("NR_CHAMADO","CD_HOSPITAL","IE_TIPO_CHAMADO","NM_PACIENTE","IE_SEXO","IE_STATUS_CHAMADO","CD_MEDICO") values (144274483,'322','I','PACIENTE 433','F','A',null);