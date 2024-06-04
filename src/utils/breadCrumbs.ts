
import { NavigateFunction } from "react-router-dom";
import { BreadCrumbsType } from "./Types";

export const getCreateMeetingBreadCrumbs = 
(
    navigate:NavigateFunction
):Array<BreadCrumbsType> => {
  return [
    {
      text: 'Dashboard',
      href: '#',onClick:()=>navigate('/')
    },
    {
      text: 'Create Meeting',
    },
  ];
}

export const getOneonOneMeetingBreadCrumbs = (
  navigate:NavigateFunction
):Array<BreadCrumbsType> => {
  return [
    {
      text: "Dashboard",
      href: "#",
      onClick: () => {
        navigate("/");
      },
    },
    {
      text: "Create Meeting",
      href: "#",
      onClick: () => {
        navigate("/create");
      },
    },
    {
      text: "Create 1 on 1 Meeting",
    },
  ];
}

export const getVideoConferenceBreadCrumbs = (
  navigate:NavigateFunction
):Array<BreadCrumbsType> => {
  return [
    {
      text: "Dashboard",
      href: "#",
      onClick: () => {
        navigate("/");
      },
    },
    {
      text: "Create Meeting",
      href: "#",
      onClick: () => {
        navigate("/create");
      },
    },
    {
      text: "Create Video Conference",
    },
  ];
}

export const getMyMeetingsBreadCrumbs = (
  navigate: NavigateFunction
): Array<BreadCrumbsType> => { return [
  {
    text: "Dashboard",
    href: "#",
    onClick: () => {
      navigate("/");
    },
  },
  {
    text: "My Meetings",
  },
]};

export const getMeetingsBreadCrumbs = (
  navigate: NavigateFunction
): Array<BreadCrumbsType> => [
  {
    text: "Dashboard",
    href: "#",
    onClick: () => {
      navigate("/");
    },
  },
  {
    text: "Meetings",
  },
];

export const getWhiteBoardBreadCrumbs = (
  navigate: NavigateFunction
): Array<BreadCrumbsType> => [
  {
    text: "Dashboard",
    href: "#",
    onClick: () => {
      navigate("/");
    },
  },
  {
    text: "White Board",
  },
];