/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AdminPipe } from './admin.pipe';

describe('AdminPipe', () => {
  it('create an instance', () => {
    let pipe = new AdminPipe();
    expect(pipe).toBeTruthy();
  });

  it('should get admin msg', () => {
    let pipe = new AdminPipe();
    expect(pipe).toBeTruthy();
    expect('Es admin').toEqual(pipe.transform(true));
  });

  it('should get not admin msg', () => {
    let pipe = new AdminPipe();
    expect(pipe).toBeTruthy();
    expect('No es admin').toEqual(pipe.transform(false));
  });
});
