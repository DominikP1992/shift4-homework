import ReactModal from 'react-modal';
import DonationWidget from './DonationWidget';
import { act, render, screen } from '@/tests/testsUtils';
import userEvent from '@testing-library/user-event';

describe('DonationWidget', () => {
  beforeEach(() => {
    // root element required for react-modal
    const appRoot = document.createElement('div');
    appRoot.setAttribute('id', 'root');
    document.body.appendChild(appRoot);
    ReactModal.setAppElement(appRoot);

    // fixed timers required for proper calculation
    jest.useFakeTimers();
    jest.setSystemTime(new Date('2024-06-15'));
  });

  afterEach(() => {
    const appRoot = document.getElementById('root');
    if (appRoot) {
      document.body.removeChild(appRoot);
    }
    jest.useRealTimers();
  });

  it('toggles widget visibility on button click', async () => {
    render(<DonationWidget />);
    const openButton = screen.getByText(/💵 Donate 💵/i);
    await userEvent.click(openButton);
    expect(screen.getByText(/The giving block/i)).toBeInTheDocument();

    const closeButton = screen.getByRole('button', { name: /cancel/i });
    await userEvent.click(closeButton);
    expect(screen.queryByText(/The giving block/i)).not.toBeInTheDocument();
  });

  it('captures a snapshot of the DonationWidget modal content when it is displayed upon clicking the Donate button', async () => {
    render(<DonationWidget />);

    const donateButton = screen.getByText(/💵 Donate 💵/i);
    await userEvent.click(donateButton);

    const modalPortalWithDocument =
      document.body.querySelector('.ReactModalPortal');
    expect(modalPortalWithDocument).toMatchSnapshot();
  });

  it('captures a snapshot for mobile view of the DonationWidget modal content when it is displayed upon clicking the Donate button', async () => {
    const originalWidth = global.innerWidth;
    const originalHeight = global.innerHeight;
    global.innerWidth = 360;
    global.innerHeight = 640;
    act(() => {
      global.dispatchEvent(new Event('resize'));
    });

    render(<DonationWidget />);

    const donateButton = screen.getByText(/💵 Donate 💵/i);
    await userEvent.click(donateButton);

    const modalPortalWithDocument =
      document.body.querySelector('.ReactModalPortal');
    expect(modalPortalWithDocument).toMatchSnapshot();

    global.innerWidth = originalWidth;
    global.innerHeight = originalHeight;
    act(() => {
      global.dispatchEvent(new Event('resize'));
    });
  });

  it('displays correct donation information for each month based on user input', async () => {
    render(<DonationWidget />);

    const donateButton = screen.getByText(/💵 Donate 💵/i);
    await userEvent.click(donateButton);

    const monthlyDonationInput = screen.getByPlaceholderText('0.00');
    await userEvent.clear(monthlyDonationInput);
    await userEvent.type(monthlyDonationInput, '100');

    expect(screen.getByTestId('each-month-donation')).toHaveTextContent(
      `You will be sending $100.00 every month, until June 2024. Thank you!`,
    );
  });

  it('setting a monthly donation and selecting a next month that results in a two-month donation period', async () => {
    render(<DonationWidget />);

    const donateButton = screen.getByText(/💵 Donate 💵/i);
    await userEvent.click(donateButton);

    const monthlyDonationInput = screen.getByPlaceholderText('0.00');
    await userEvent.clear(monthlyDonationInput);
    await userEvent.type(monthlyDonationInput, '100');

    const nextMonthButton = screen.getByLabelText('select next month');
    await userEvent.click(nextMonthButton);

    expect(screen.getByTestId('total-amount')).toHaveTextContent('$200.00');
  });
});
