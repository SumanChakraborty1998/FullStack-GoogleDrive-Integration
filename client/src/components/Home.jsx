import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import useDrivePicker from "react-google-drive-picker";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { useEffect } from "react";
import { gapi } from "gapi-script";

export const Home = ({ setData }) => {
  const [openPicker, authResponse] = useDrivePicker();
  const [isLoggedin, setIsLoggedIn] = useState(false);

  const clientId =
    "568745200436-sdv29b113ffm7uqe05ftovq1juie7mkj.apps.googleusercontent.com";

  const handleOpenDrive = () => {
    openPicker({
      clientId: clientId,
      developerKey: "AIzaSyCrL9nZBf83pMV7BlTCVWxcap2cCPTA_MA",
      viewId: "DOCS",
      showUploadView: true,
      showUploadFolders: true,
      supportDrives: true,
      multiselect: true,
      callbackFunction: (res) => {
        console.log(res);
        setData(res.docs);
      },
    });
  };

  const successResponseFromGoogle = (response) => {
    console.log(response.profileObj);
    setIsLoggedIn(true);
  };

  const failureResponseFromGoogle = (response) => {
    console.log(response);
  };

  const logoutSuccess = () => {
    setIsLoggedIn(false);
  };

  useEffect(() => {
    const start = () => {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    };

    gapi.load("client:auth2", start);
  });

  return (
    <div>
      <Stack
        spacing={2}
        direction="row"
        sx={{
          marginTop: "50px",
          justifyContent: "center",
          display: "flex",
        }}
      >
        {isLoggedin ? (
          <GoogleLogout
            clientId={clientId}
            buttonText="Logout - Google Drive"
            icon={true}
            // isSignedIn={true}
            onLogoutSuccess={(res) => logoutSuccess(res)}
          />
        ) : (
          <GoogleLogin
            // clientId="568745200436-sdv29b113ffm7uqe05ftovq1juie7mkj.apps.googleusercontent.com"
            clientId={clientId}
            buttonText="Connect to Google Drive"
            onSuccess={(res) => successResponseFromGoogle(res)}
            onFailure={(res) => failureResponseFromGoogle(res)}
            // cookiePolicy={"single_host_origin"}
            isSignedIn={false}
          />
        )}

        <Button variant="outlined" onClick={handleOpenDrive}>
          Select File from Google Drive
        </Button>
      </Stack>
    </div>
  );
};
