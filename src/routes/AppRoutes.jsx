import React from 'react';
import { AuthenticatedPageRoute, PageWrap } from '@edx/frontend-platform/react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { ProfilePage, NotFoundPage } from '../profile';
import {PluginSlot} from "@openedx/frontend-plugin-framework";


const AppRoutes = () => {
  const navigate = useNavigate();

  return (
    <Routes>
      <Route path="/u/:username" element={
        <AuthenticatedPageRoute>
          <PluginSlot
            id = "profile_page_plugin_slot"
            pluginProps = {{
              navigate: navigate,
            }}
          >
            <ProfilePage navigate={navigate} />
          </PluginSlot>
        </AuthenticatedPageRoute>} />
      <Route path="/notfound" element={<PageWrap><NotFoundPage /></PageWrap>} />
      <Route path="*" element={<PageWrap><NotFoundPage /></PageWrap>} />
    </Routes>
  );
};

export default AppRoutes;
