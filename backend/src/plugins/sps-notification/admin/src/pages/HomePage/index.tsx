/*
 *
 * HomePage
 *
 */

import React from "react";
import pluginId from "../../pluginId";
import { Box, Flex, HeaderLayout, Layout, Main } from "@strapi/design-system";
import { InformationSquare } from "@strapi/icons";
import { ContentBox, useTracking } from "@strapi/helper-plugin";

const HomePage = () => {
  return (
    <Layout>
      <Main>
        <HeaderLayout title={pluginId} />
        <Box paddingLeft={10} paddingRight={10} paddingTop={0}>
          <Flex direction="column" alignItems="stretch" gap={5}>
            <ContentBox
              title="Notification Plugin"
              subtitle="Here will be Content Manager for Notifications plugin"
              icon={<InformationSquare />}
              iconBackground="primary100"
            />
          </Flex>
        </Box>
      </Main>
    </Layout>
  );
};

export default HomePage;
