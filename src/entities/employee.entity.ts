import { EmployeeStatus } from "../shared/interfaces/interfaces";
import {
  Entity,
  Column,
  UpdateDateColumn,
  BaseEntity,
  PrimaryColumn,
  Generated,
  Index,
} from "typeorm";

@Entity('employee')
export class Employee extends BaseEntity {
  @PrimaryColumn({type:"uuid"})
  @Generated("uuid")
  @Index()
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({
    type: "enum",
    enum: EmployeeStatus,
    default: EmployeeStatus.UNKNOWN
  })
  status: EmployeeStatus;

  @UpdateDateColumn({ type: 'timestamptz' })
  changedAt: Date;
}
