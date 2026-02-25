import React from "react";
import Title from "../Title";
import type { Staff } from "@/types/staff";
import { getStaff } from "@/services/staff";
import StaffCard from "../StaffCard";

export default async function Staff() {
  let staffData: Staff[] | null = null;

  try {
    staffData = await getStaff();
  } catch (error) {
    console.error("Error fetching staff: ", error);
  }

  const staffs = staffData ? staffData : [];
  console.log(staffData)

  return (
    <section
      className="bg-black/80 dark:bg-surface-dark/50 py-20 border-y border-white/5"
      id="staff"
    >
      <div className="mx-auto px-6 md:px-10 max-w-[1200px]">

          <Title
            title="Maestros de la Navaja"
            subtitle="Nuestros barberos no solo dominan la técnica, forjan tu identidad."
          />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {staffs.map((staff, index) => (
            <StaffCard key={index} staff={staff} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
