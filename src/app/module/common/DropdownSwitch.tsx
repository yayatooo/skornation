"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import { useLocale } from "next-intl";
import { useTransition } from "react";
import { useRouter } from "next/navigation";

export const DropdownSwitch = () => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();

  const onSelectChange = (value: string) => {
    const nextLocale = value;
    startTransition(() => {
      router.replace(`/${nextLocale}`);
    });
  };

  return (
    <Select defaultValue={localActive} disabled={isPending} onValueChange={onSelectChange}>
      <SelectTrigger className="w-[38px] py-0" aria-label="Select Language">
        <SelectValue placeholder="Select Language" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="en">
            <div className="flex gap-2">
              <Image
                src="/usa-flag-round-circle-icon.svg"
                width={23}
                height={23}
                alt="USA flag"
                className="object-cover"
              />
              <h1>English</h1>
            </div>
          </SelectItem>
          <SelectItem value="kh">
            <div className="flex gap-2">
              <Image
                src="/cambodia-flag.svg"
                width={23}
                height={23}
                alt="Cambodia flag"
                className="object-cover"
              />
              <h1>Khmer</h1>
            </div>
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
