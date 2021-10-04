import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { extendSchemaImpl } from 'graphql/utilities/extendSchema';
import { Repository } from 'typeorm';
import { CreateEmployeeInput } from './dto/create-employee.input';
import { UpdateEmployeeInput } from './dto/update-employee.input';
import { Employee } from './entities/employee.entity';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private empRepository: Repository<Employee>,
  ) {}

  async create(createEmployeeInput: CreateEmployeeInput) {
    const data=await this.empRepository.create(createEmployeeInput)
    return this.empRepository.save(data);
  }

  findAll() {
    return this.empRepository.find();
  }

  findOne(id: string) {
    return this.empRepository.findOne(id);
  }

 async update(id: string, updateEmployeeInput: UpdateEmployeeInput) {
    const data=await this.empRepository.update({id:updateEmployeeInput.id },
      {
        name:updateEmployeeInput.name,
        email:updateEmployeeInput.email,
        password:updateEmployeeInput.password
      })
    return data;
  }

  remove(id: string) {
    return this.empRepository.delete(id);
  }
}
