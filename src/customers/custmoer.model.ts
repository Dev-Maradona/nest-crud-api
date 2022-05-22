import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Customer } from "src/typeorm";
import { CustomersController } from "./controllers/customers/customers.controller";
import { CustomersService } from "./services/customers/customers.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([Customer])
    ],
    controllers: [CustomersController],
    providers: [CustomersService],
})

export class CustomerModule { };