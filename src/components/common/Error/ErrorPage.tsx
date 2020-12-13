/* eslint-disable jsx-a11y/alt-text */
import React, { FC } from "react";
import css from "./Error.module.css";

type ErrorPageType = {
  error: string;
};
const ErrorPage: FC<ErrorPageType> = (props) => {
  return (
    <>
      <img
        className={css.modalError}
        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGc+PHBhdGggZD0ibTQ2NS45ODYgNDAyLjQ0YzI4Ljk5My00MS40OTcgNDYuMDE0LTkxLjk3NyA0Ni4wMTQtMTQ2LjQ0IDAtMTQxLjM4NS0xMTQuNjE1LTI1Ni0yNTYtMjU2cy0yNTYgMTE0LjYxNS0yNTYgMjU2YzAgNTQuNDYzIDE3LjAyMSAxMDQuOTQzIDQ2LjAxNCAxNDYuNDR6IiBmaWxsPSIjZmZkZDQwIiBkYXRhLW9yaWdpbmFsPSIjZmZkZDQwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PC9nPjxnPjxwYXRoIGQ9Im00NjYgNjB2MzQyLjQ0Yy00Ni4yNyA2Ni4yMy0xMjMuMDggMTA5LjU2LTIxMCAxMDkuNTZzLTE2My43My00My4zMy0yMTAtMTA5LjU2di0zNDIuNDRsNTUuMTctNy44OCAxNTQuODMtMjIuMTIgMTU0LjgzIDIyLjEyeiIgZmlsbD0iI2EwNDFmZiIgZGF0YS1vcmlnaW5hbD0iI2ZmNDE1NSIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjwvZz48Zz48cGF0aCBkPSJtMTI1LjY3IDQ4LjYyLTI0LjUgMy41LTU1LjE3IDcuODh2MzQyLjQ0YzQ2LjI3IDY2LjIzIDEyMy4wOCAxMDkuNTYgMjEwIDEwOS41NnMxNjMuNzMtNDMuMzMgMjEwLTEwOS41NmMtMTg3Ljk1OSAwLTM0MC4zMjktMTUyLjM3MS0zNDAuMzI5LTM0MC4zMjl2LTEzLjQ5MXoiIGZpbGw9IiM4YTAwZTgiIGRhdGEtb3JpZ2luYWw9IiNlODAwNTQiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48L2c+PGc+PHBhdGggZD0ibTQ2NiA2MGgtNDIwdi00MGMwLTExLjA0NiA4Ljk1NC0yMCAyMC0yMGgzODBjMTEuMDQ2IDAgMjAgOC45NTQgMjAgMjB6IiBmaWxsPSIjMmE0MjhjIiBkYXRhLW9yaWdpbmFsPSIjMmE0MjhjIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PC9nPjxnPjxwYXRoIGQ9Im0xMTQuNTU3IDUwYzAtNS41MjMgNC40NzctMTAgMTAtMTB2LTIwYy01LjUyMyAwLTEwLTQuNDc3LTEwLTEwczQuNDc3LTEwIDEwLTEwaC01OC41NTdjLTExLjA0NiAwLTIwIDguOTU0LTIwIDIwdjQwaDc4LjU1N2MtNS41MjMgMC0xMC00LjQ3Ny0xMC0xMHoiIGZpbGw9IiMxYzJlN2EiIGRhdGEtb3JpZ2luYWw9IiMxYzJlN2EiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48L2c+PGc+PGNpcmNsZSBjeD0iNDIzLjUiIGN5PSIzMCIgZmlsbD0iI2EwNDFmZiIgcj0iMTAiIGRhdGEtb3JpZ2luYWw9IiNmZjQxNTUiIHN0eWxlPSIiIGNsYXNzPSIiPjwvY2lyY2xlPjwvZz48Zz48Y2lyY2xlIGN4PSIzODguNSIgY3k9IjMwIiBmaWxsPSIjZmZkZDQwIiByPSIxMCIgZGF0YS1vcmlnaW5hbD0iI2ZmZGQ0MCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9jaXJjbGU+PC9nPjxnPjxjaXJjbGUgY3g9IjM1My41IiBjeT0iMzAiIGZpbGw9IiMzOGM2NzQiIHI9IjEwIiBkYXRhLW9yaWdpbmFsPSIjMzhjNjc0IiBzdHlsZT0iIj48L2NpcmNsZT48L2c+PGc+PHBhdGggZD0ibTg4LjUgNDBoMjE1YzUuNTIzIDAgMTAtNC40NzcgMTAtMTAgMC01LjUyMy00LjQ3Ny0xMC0xMC0xMGgtMjE1Yy01LjUyMyAwLTEwIDQuNDc3LTEwIDEwIDAgNS41MjMgNC40NzcgMTAgMTAgMTB6IiBmaWxsPSIjM2M1OGEwIiBkYXRhLW9yaWdpbmFsPSIjM2M1OGEwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PC9nPjxnPjxnPjxwYXRoIGQ9Im0xODguMTczIDIwNi41NyA2MC4xNDktMTAyLjE4YzMuNDQ2LTUuODUzIDExLjkxMS01Ljg1MyAxNS4zNTYgMGw2MC4xNDkgMTAyLjE4YzMuNDk2IDUuOTQtLjc4NiAxMy40My03LjY3OCAxMy40M2gtMTIwLjI5OGMtNi44OTIgMC0xMS4xNzUtNy40OS03LjY3OC0xMy40M3oiIGZpbGw9IiNmZmRkNDAiIGRhdGEtb3JpZ2luYWw9IiNmZmRkNDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48L2c+PGc+PGc+PHBhdGggZD0ibTI1NiAxODMuMDE1Yy01LjUyMyAwLTEwLTQuNDc3LTEwLTEwdi0zNC41OTdjMC01LjUyMyA0LjQ3Ny0xMCAxMC0xMCA1LjUyMyAwIDEwIDQuNDc3IDEwIDEwdjM0LjU5N2MwIDUuNTIzLTQuNDc3IDEwLTEwIDEweiIgZmlsbD0iIzJhNDI4YyIgZGF0YS1vcmlnaW5hbD0iIzJhNDI4YyIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjwvZz48Zz48Y2lyY2xlIGN4PSIyNTYiIGN5PSIyMDAuNTE1IiBmaWxsPSIjMWMyZTdhIiByPSIxMCIgZGF0YS1vcmlnaW5hbD0iIzFjMmU3YSIgc3R5bGU9IiIgY2xhc3M9IiI+PC9jaXJjbGU+PC9nPjxnPjxwYXRoIGQ9Im0yNTYgMTY1LjcxN2MtNS41MjMgMC0xMC00LjQ3Ny0xMC0xMHYxNy4yOThjMCA1LjUyMyA0LjQ3NyAxMCAxMCAxMHMxMC00LjQ3NyAxMC0xMHYtMTcuMjk4YzAgNS41MjMtNC40NzcgMTAtMTAgMTB6IiBmaWxsPSIjMWMyZTdhIiBkYXRhLW9yaWdpbmFsPSIjMWMyZTdhIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PC9nPjwvZz48L2c+PGc+PHBhdGggZD0ibTM1NiAyODcuNWgtMjAwYy00LjE0MyAwLTcuNS0zLjM1OC03LjUtNy41czMuMzU3LTcuNSA3LjUtNy41aDIwMGM0LjE0MyAwIDcuNSAzLjM1OCA3LjUgNy41cy0zLjM1NyA3LjUtNy41IDcuNXoiIGZpbGw9IiNjZjRjZmYiIGRhdGEtb3JpZ2luYWw9IiNmZjcxODYiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48L2c+PGc+PHBhdGggZD0ibTM5NiAzNjcuNWgtMjgwYy00LjE0MyAwLTcuNS0zLjM1OC03LjUtNy41czMuMzU3LTcuNSA3LjUtNy41aDI4MGM0LjE0MyAwIDcuNSAzLjM1OCA3LjUgNy41cy0zLjM1NyA3LjUtNy41IDcuNXoiIGZpbGw9IiNjZjRjZmYiIGRhdGEtb3JpZ2luYWw9IiNmZjcxODYiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48L2c+PGc+PHBhdGggZD0ibTM5NiAzOTcuNWgtMjgwYy00LjE0MyAwLTcuNS0zLjM1OC03LjUtNy41czMuMzU3LTcuNSA3LjUtNy41aDI4MGM0LjE0MyAwIDcuNSAzLjM1OCA3LjUgNy41cy0zLjM1NyA3LjUtNy41IDcuNXoiIGZpbGw9IiNjZjRjZmYiIGRhdGEtb3JpZ2luYWw9IiNmZjcxODYiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48L2c+PGc+PHBhdGggZD0ibTI1NiA0MjcuNWgtMTQwYy00LjE0MyAwLTcuNS0zLjM1OC03LjUtNy41czMuMzU3LTcuNSA3LjUtNy41aDE0MGM0LjE0MyAwIDcuNSAzLjM1OCA3LjUgNy41cy0zLjM1NyA3LjUtNy41IDcuNXoiIGZpbGw9IiNjZjRjZmYiIGRhdGEtb3JpZ2luYWw9IiNmZjcxODYiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48L2c+PGc+PHBhdGggZD0ibTMyNiAzMTcuNWgtMTQwYy00LjE0MyAwLTcuNS0zLjM1OC03LjUtNy41czMuMzU3LTcuNSA3LjUtNy41aDE0MGM0LjE0MyAwIDcuNSAzLjM1OCA3LjUgNy41cy0zLjM1NyA3LjUtNy41IDcuNXoiIGZpbGw9IiNjZjRjZmYiIGRhdGEtb3JpZ2luYWw9IiNmZjcxODYiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48L2c+PC9nPjwvZz48L3N2Zz4="
      />
      <h1 className={css.error}>{props.error}</h1>
    </>
  );
};

export default ErrorPage;