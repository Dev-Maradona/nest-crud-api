import { Injectable } from '@nestjs/common';
import { createCustomerDto } from 'src/customers/dto/create-customer.dto';

@Injectable()
export class CustomersService {

    customers = [
        {
            id: 1,
            name: 'mohamed',
            email: 'Mohamed@email.com',
        },
        {
            id: 2,
            name: 'ahmed',
            email: 'Ahmed@email.com',
        },
        {
            id: 3,
            named: 'sayed',
            email: 'Sayed@email.com',
        },
    ]

    findCustomers() {
        return this.customers;
    }

    findCustomerById(id: number) {
        return this.customers.find(user => user.id === id);
    }
    
    createCustomer(customerDto: createCustomerDto) {
        return this.customers.push(customerDto);
    }
}
