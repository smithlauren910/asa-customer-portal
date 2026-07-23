import { MoreVertical } from 'lucide-react';
import imgLogo from "figma:asset/d6c973a49b3a11fd6b1f8226d69743e93a3fd1d8.png";
import { CURRENT_USER_NAME } from '../data/currentUser';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';

const SVG_BELL_BODY = "M2.71833 12.7717C2.60947 12.891 2.53763 13.0394 2.51155 13.1988C2.48546 13.3582 2.50627 13.5217 2.57142 13.6695C2.63658 13.8173 2.74328 13.943 2.87855 14.0312C3.01381 14.1195 3.17182 14.1665 3.33333 14.1667H16.6667C16.8282 14.1667 16.9862 14.1199 17.1216 14.0318C17.2569 13.9437 17.3637 13.8181 17.4291 13.6704C17.4944 13.5227 17.5154 13.3592 17.4895 13.1998C17.4637 13.0404 17.392 12.892 17.2833 12.7725C16.175 11.63 15 10.4158 15 6.66667C15 5.34058 14.4732 4.06881 13.5355 3.13113C12.5979 2.19345 11.3261 1.66667 10 1.66667C8.67392 1.66667 7.40215 2.19345 6.46447 3.13113C5.52678 4.06881 5 5.34058 5 6.66667C5 10.4158 3.82417 11.63 2.71833 12.7717Z";
const SVG_BELL_CLAPPER = "M8.55667 17.5C8.70295 17.7533 8.91335 17.9637 9.1667 18.11C9.42006 18.2563 9.70745 18.3333 10 18.3333C10.2925 18.3333 10.5799 18.2563 10.8333 18.11C11.0867 17.9637 11.297 17.7533 11.4433 17.5";
const SVG_GEAR_BODY = "M10.1833 1.66667H9.81667C9.37464 1.66667 8.95072 1.84226 8.63816 2.15482C8.32559 2.46738 8.15 2.89131 8.15 3.33333V3.48333C8.1497 3.7756 8.07255 4.06266 7.92628 4.3157C7.78002 4.56874 7.56978 4.77886 7.31667 4.925L6.95833 5.13333C6.70497 5.27961 6.41756 5.35662 6.125 5.35662C5.83244 5.35662 5.54503 5.27961 5.29167 5.13333L5.16667 5.06667C4.78422 4.84605 4.32986 4.7862 3.90334 4.90026C3.47681 5.01431 3.11296 5.29295 2.89167 5.675L2.70833 5.99167C2.48772 6.37411 2.42787 6.82847 2.54192 7.255C2.65598 7.68153 2.93461 8.04537 3.31667 8.26667L3.44167 8.35C3.69356 8.49543 3.90302 8.70424 4.04921 8.95569C4.1954 9.20714 4.27324 9.49248 4.275 9.78333V10.2083C4.27617 10.502 4.19971 10.7908 4.05337 11.0454C3.90703 11.3001 3.69601 11.5115 3.44167 11.6583L3.31667 11.7333C2.93461 11.9546 2.65598 12.3185 2.54192 12.745C2.42787 13.1715 2.48772 13.6259 2.70833 14.0083L2.89167 14.325C3.11296 14.7071 3.47681 14.9857 3.90334 15.0997C4.32986 15.2138 4.78422 15.1539 5.16667 14.9333L5.29167 14.8667C5.54503 14.7204 5.83244 14.6434 6.125 14.6434C6.41756 14.6434 6.70497 14.7204 6.95833 14.8667L7.31667 15.075C7.56978 15.2211 7.78002 15.4313 7.92628 15.6843C8.07255 15.9373 8.1497 16.2244 8.15 16.5167V16.6667C8.15 17.1087 8.32559 17.5326 8.63816 17.8452C8.95072 18.1577 9.37464 18.3333 9.81667 18.3333H10.1833C10.6254 18.3333 11.0493 18.1577 11.3618 17.8452C11.6744 17.5326 11.85 17.1087 11.85 16.6667V16.5167C11.8503 16.2244 11.9275 15.9373 12.0737 15.6843C12.22 15.4313 12.4302 15.2211 12.6833 15.075L13.0417 14.8667C13.295 14.7204 13.5824 14.6434 13.875 14.6434C14.1676 14.6434 14.455 14.7204 14.7083 14.8667L14.8333 14.9333C15.2158 15.1539 15.6701 15.2138 16.0967 15.0997C16.5232 14.9857 16.887 14.7071 17.1083 14.325L17.2917 14C17.5123 13.6176 17.5721 13.1632 17.4581 12.7367C17.344 12.3101 17.0654 11.9463 16.6833 11.725L16.5583 11.6583C16.304 11.5115 16.093 11.3001 15.9466 11.0454C15.8003 10.7908 15.7238 10.502 15.725 10.2083V9.79167C15.7238 9.49798 15.8003 9.20921 15.9466 8.95458C16.093 8.69995 16.304 8.48851 16.5583 8.34167L16.6833 8.26667C17.0654 8.04537 17.344 7.68153 17.4581 7.255C17.5721 6.82847 17.5123 6.37411 17.2917 5.99167L17.1083 5.675C16.887 5.29295 16.5232 5.01431 16.0967 4.90026C15.6701 4.7862 15.2158 4.84605 14.8333 5.06667L14.7083 5.13333C14.455 5.27961 14.1676 5.35662 13.875 5.35662C13.5824 5.35662 13.295 5.27961 13.0417 5.13333L12.6833 4.925C12.4302 4.77886 12.22 4.56874 12.0737 4.3157C11.9275 4.06266 11.8503 3.7756 11.85 3.48333V3.33333C11.85 2.89131 11.6744 2.46738 11.3618 2.15482C11.0493 1.84226 10.6254 1.66667 10.1833 1.66667Z";
const SVG_GEAR_CENTER = "M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z";

interface TopNavProps {
  fabricatorName: string;
  onSwitchFabricator: () => void;
  onOpenAccount: () => void;
  onOpenAlerts: () => void;
  unreadAlertCount: number;
}

export function TopNav({ fabricatorName, onSwitchFabricator, onOpenAccount, onOpenAlerts, unreadAlertCount }: TopNavProps) {
  return (
    <div
      className="flex items-center justify-between h-[56px] px-3 sm:px-6 bg-[#0d7a6e] shrink-0"
      style={{ fontFamily: 'Inter, sans-serif' }}
    >
      <div className="flex items-center gap-2 sm:gap-6 min-w-0">
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Logo */}
          <div className="shrink-0 w-[64px] sm:w-[96px] h-[35px] sm:h-[53px] relative overflow-hidden">
            <img alt="aSa Software" className="absolute h-full left-0 top-0 max-w-none" style={{ width: '321.1%' }} src={imgLogo} />
          </div>

          {/* Separator + Customer Portal title */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <div className="w-px h-10 bg-white/30" />
            <span className="text-white text-[18px] font-medium opacity-90 whitespace-nowrap">Customer Portal</span>
          </div>
        </div>

        {/* Fabricator + switch */}
        <button
          onClick={onSwitchFabricator}
          className="flex items-center gap-2 text-white text-[14px] opacity-90 hover:opacity-100 transition-opacity min-w-0"
        >
          <span className="font-medium truncate max-w-[110px] sm:max-w-none">{fabricatorName}</span>
          <span className="hidden sm:inline text-[12px] underline opacity-80 shrink-0">Switch</span>
        </button>
      </div>

      {/* Right side: user info + icons */}
      <div className="flex items-center gap-2 sm:gap-4 shrink-0">
        {/* Avatar */}
        <button
          onClick={onOpenAccount}
          className="flex items-center justify-center w-8 h-8 rounded-full text-[13px] font-semibold text-white shrink-0"
          style={{ backgroundColor: '#095c53', border: '2px solid rgba(255,255,255,0.3)' }}
        >
          {CURRENT_USER_NAME.split(' ').map((n) => n[0]).join('')}
        </button>

        <span className="hidden sm:inline text-white text-[14px] whitespace-nowrap">
          {CURRENT_USER_NAME}
        </span>

        {/* Bell */}
        <button onClick={onOpenAlerts} title="Alerts" className="relative opacity-85 hover:opacity-100 transition-opacity">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d={SVG_BELL_BODY} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
            <path d={SVG_BELL_CLAPPER} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
          {unreadAlertCount > 0 && (
            <span className="absolute -top-1.5 -right-1.5 inline-flex items-center justify-center min-w-[16px] h-[16px] px-1 rounded-full bg-[#c62828] text-white text-[10px] font-medium">
              {unreadAlertCount}
            </span>
          )}
        </button>

        {/* Settings */}
        <button onClick={onOpenAccount} className="hidden sm:flex opacity-85 hover:opacity-100 transition-opacity">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d={SVG_GEAR_BODY} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
            <path d={SVG_GEAR_CENTER} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </button>

        {/* Mobile overflow menu: Switch / Settings */}
        <Popover>
          <PopoverTrigger asChild>
            <button className="sm:hidden opacity-85 hover:opacity-100 transition-opacity">
              <MoreVertical size={20} color="white" />
            </button>
          </PopoverTrigger>
          <PopoverContent align="end" className="w-48 p-1">
            <button
              onClick={onSwitchFabricator}
              className="w-full text-left px-3 py-2 rounded-md text-[13px] text-[#1a1a1a] hover:bg-[#f3f4f6] transition-colors"
            >
              Switch Fabricator
            </button>
            <button
              onClick={onOpenAccount}
              className="w-full text-left px-3 py-2 rounded-md text-[13px] text-[#1a1a1a] hover:bg-[#f3f4f6] transition-colors"
            >
              Settings
            </button>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}
