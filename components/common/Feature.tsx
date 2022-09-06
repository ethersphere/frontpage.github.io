import * as React from "react";
import { FeatureType } from "types";
import { cx } from "utils";
import Button from "./Button";
import {
  DdosIcon,
  DowntimeIcon,
  FaultIcon,
  PrivacyIcon,
  CredibleIcon,
  OpenIcon,
  GrowIcon,
  ForkIcon,
  ConnectIcon,
  UploadIcon,
} from "@/icons/index";
import Icons from "@/icons/components/index";

const Feature: React.FC<FeatureType> = ({
  title,
  content,
  icon,
  cta,
  type = "default",
}) => {
  const textHeadingClass = type === "default" ? "md:text-lg" : "text-2xl";
  const copyClass =
    type === "default" ? "pt-2 pb-3 prose-sm" : "pt-5 pb-8 md:prose-lg prose";

  const icons: any = {
    OpenIcon: Icons.OpenIcon,
    DdosIcon: DdosIcon,
    PrivacyIcon: PrivacyIcon,
    CredibleIcon: CredibleIcon,
    DowntimeIcon: DowntimeIcon,
    FaultIcon: FaultIcon,
    GrowIcon: GrowIcon,
    ConnectIcon: ConnectIcon,
    Upload2Icon: Icons.Upload2Icon,
    ForkIcon: ForkIcon,
    PlusIcon: Icons.PlusIcon,
    UnlimitedIcon: Icons.UnlimitedIcon,
    LayersIcon: Icons.LayersIcon,
    UploadIcon: Icons.UploadIcon,
    CompassIcon: Icons.CompassIcon,
    ExpandIcon: Icons.ExpandIcon,
    LockIcon: Icons.LockIcon,
    LeakIcon: Icons.LeakIcon,
    NutIcon: Icons.NutIcon,
    BoxArrowIcon: Icons.BoxArrowIcon,
    HeartIcon: Icons.HeartIcon,
    PullIcon: Icons.PullIcon,
    PushIcon: Icons.PushIcon,
    RetrieveIcon: Icons.RetrieveIcon,
    RouteIcon: Icons.RouteIcon,
  };

  const IconTag: any = icon ? icons[icon] : false;

  const imageClass =
    type === "default"
      ? "w-8 h-8 sm:h-10 sm:w-10"
      : "w-10 h-10 sm:h-12 sm:w-12";

  return (
    <div className="flex flex-col">
      <div
        className={cx(
          "inline-flex items-center px-3 font-bold border-l border-current sm:px-4",
          textHeadingClass
        )}
      >
        {title}
      </div>
      {content && content.length > 0 && (
        <div
          className={cx("px-3 sm:px-4", copyClass)}
          dangerouslySetInnerHTML={{
            __html: content,
          }}
        />
      )}
      {IconTag !== false && (
        <div className="flex items-end flex-grow px-3 pt-1 sm:px-4 sm:pt-3">
          <IconTag className="h-[38px]" />
          {/* <img className={imageClass} src={image.src} alt={image.alt} /> */}
        </div>
      )}

      {cta && cta.href.length > 0 && (
        <div className="">
          <Button
            href={cta.href}
            title={cta.title}
            background="transparent"
            color={cta.color ?? "black"}
            arrow={true}
          />
        </div>
      )}
    </div>
  );
};

export default Feature;
