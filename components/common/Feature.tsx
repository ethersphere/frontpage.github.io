import * as React from "react";
import { FeatureType } from "types";
import { cx } from "utils";
import Button from "./Button";
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
    DdosIcon: Icons.DdosIcon,
    PrivacyIcon: Icons.PrivacyIcon,
    CredibleIcon: Icons.CredibleIcon,
    DowntimeIcon: Icons.DowntimeIcon,
    FaultIcon: Icons.FaultIcon,
    GrowIcon: Icons.GrowIcon,
    ConnectIcon: Icons.ConnectIcon,
    Upload2Icon: Icons.Upload2Icon,
    ForkIcon: Icons.ForkIcon,
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
          <IconTag className={type === "default" ? "h-[32px]" : "h-[40px]"} />
        </div>
      )}

      {cta && cta.href.length > 0 && (
        <div className="px-3 sm:px-4">
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
