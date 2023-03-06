import { prisma } from "@/pages/api/graphql";
import { IncomingMessage } from "http";
import { initializeApollo } from "./apolloClient";

export const initializeApolloClient = (
  req: IncomingMessage & {
    cookies: Partial<{
      [key: string]: string;
    }>;
  }
) => {
  return initializeApollo({ ctx: { req, prisma } });
};
