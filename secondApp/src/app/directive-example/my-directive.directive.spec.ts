import { MyDirectiveDirective } from './my-directive.directive';

describe('MyDirectiveDirective', () => {
  it('should create an instance', () => {
    let e;
    const directive = new MyDirectiveDirective(e);
    expect(directive).toBeTruthy();
  });
});
