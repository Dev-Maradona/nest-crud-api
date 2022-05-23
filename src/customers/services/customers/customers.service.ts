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
