import {renderWithRouter} from "../../tests/helpers/renderWithRouter";
import NavBar from "./NavBar";
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe('Nav Bar tests', () => {

   test( 'Nav Bar test about link', async () => {
      render( renderWithRouter(<NavBar/>));
      const aboutLink = screen.getByTestId('about-link');
      userEvent.click( aboutLink );
      expect( screen.getByTestId('about-page') ).toBeInTheDocument();

   });
   test( 'Nav Bar test main link', async () => {
      render( renderWithRouter(<NavBar/>));
      const mainLink = screen.getByTestId('main-link');
      userEvent.click( mainLink );
      expect( screen.getByTestId('main-page') ).toBeInTheDocument();

   });
   test( 'Nav Bar test users link', async () => {
      render( renderWithRouter(<NavBar/>));
      const usersLink = screen.getByTestId('users-link');
      userEvent.click( usersLink );
      expect( screen.getByTestId('users-page') ).toBeInTheDocument();
   });
});