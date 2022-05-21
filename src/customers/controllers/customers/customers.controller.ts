import { Body, Controller, Get, HttpException, HttpStatus, Param, ParseIntPipe, Post, Req, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { Request, Response } from 'express';
import { createCustomerDto } from 'src/customers/dto/create-customer.dto';
import { CustomersService } from 'src/customers/services/customers/customers.service';

@Controller('customers')
export class CustomersController {

    constructor(private customerService: CustomersService) { }

    /**
     * Get all customers
     * @returns Customers[]
    */

    @Get()
    getCustomers() {
        return this.customerService.findCustomers();
    }

    /**
     * How to get Customer by old way
     * @param id Get Customer by ID
     * @param req How to use Request like express
     * @param res How to use Response like express
    */

    @Get(':id')
    getCustomer(@Param('id', ParseIntPipe) id: number, @Req() req: Request, @Res() res: Response) {
        // const customerId = req.params.id;;
        const customer = this.customerService.findCustomerById(id);
        if (customer) {
            res.send(customer);
        } else {
            res.status(404).send('Customer not found!');
        }
        // return this.customerService.findCustomerById(1);
    }

    /**
     * How to get customer by nest js way
     * @param id 
     * @returns Customer by ID
    */

    @Get('/search/:id')
    GetCustomerBySearch(@Param('id', ParseIntPipe) id: number) {
        console.log(typeof id);
        const customer = this.customerService.findCustomerById(id);
        if (customer) return customer
        else throw new HttpException('Customer not found!', HttpStatus.NOT_FOUND);
    }

    /**
     * Post Request with nestjs
     * @param createCustomerDto 
     * @returns create new customer
    */

    @Post()
    @UsePipes(ValidationPipe)
    createCustomer(@Body() createCustomerDto: createCustomerDto) {
        const createCustomer = this.customerService.createCustomer(createCustomerDto);
        if (createCustomer) return 'Customer is created';
        else throw new HttpException('Customer not created please try again later', HttpStatus.CONFLICT);
    }
}