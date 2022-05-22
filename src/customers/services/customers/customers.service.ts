import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCustomerDto } from 'src/customers/dto/create-customer.dto';
import { Customer } from 'src/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CustomersService {

    constructor(
        @InjectRepository(Customer)
        private customerRepository: Repository<Customer>
    ) { }

    // customers = [
    //     {
    //         id: 1,
    //         name: 'mohamed',
    //         email: 'Mohamed@email.com',
    //     },
    //     {
    //         id: 2,
    //         name: 'ahmed',
    //         email: 'Ahmed@email.com',
    //     },
    //     {
    //         id: 3,
    //         named: 'sayed',
    //         email: 'Sayed@email.com',
    //     },
    // ]

    findCustomers() {
        return this.customerRepository.find();
    }

    findCustomerById(id: number) {
        return this.customerRepository.findOne(id);
    }

    createCustomer(createCustomerDto: CreateCustomerDto) {
        const customer = this.customerRepository.create(createCustomerDto);
        return this.customerRepository.save(customer);
    }
}
