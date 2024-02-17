import ReactModal from 'react-modal';
import DonationWidget from './DonationWidget';
import { fireEvent, render, screen, waitFor } from '@/tests/testsUtils';

describe('DonationWidget', () => {
  beforeEach(() => {
    const appRoot = document.createElement('div');
    appRoot.setAttribute('id', 'root');
    document.body.appendChild(appRoot);
    ReactModal.setAppElement(appRoot);
  });

  afterEach(() => {
    const appRoot = document.getElementById('root');
    if (appRoot) {
      document.body.removeChild(appRoot);
    }
  });

  it('toggles widget visibility on button click', () => {
    render(
      <div id="root">
        <DonationWidget />
      </div>,
    );
    const openButton = screen.getByText(/💵 Donate 💵/i);
    fireEvent.click(openButton);
    expect(screen.getByText(/The giving block/i)).toBeInTheDocument();

    const closeButton = screen.getByRole('button', { name: /cancel/i });
    fireEvent.click(closeButton);
    expect(screen.queryByText(/The giving block/i)).not.toBeInTheDocument();
  });

  it('check calculation', () => {

  });


});
