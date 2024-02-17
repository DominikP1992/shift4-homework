import { render } from '@testing-library/react';
import * as Icons from './index';

describe('Icon ', () => {
  Object.entries(Icons).forEach(([IconName, IconComponent]) => {
    it(`${IconName} renders without crashing`, () => {
      const { container } = render(<IconComponent />);
      expect(container.firstChild).toBeInTheDocument();
    });

    it(`${IconName} matches snapshot`, () => {
      const { container } = render(<IconComponent />);
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
