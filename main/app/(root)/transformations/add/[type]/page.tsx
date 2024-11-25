import Header from "@/app/components/shared/Header";
import TransformationForm from "@/app/components/shared/TransformationForm";
import { transformationTypes } from "@/constants";
import { getUserById } from "@/lib/actions/user.action";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

const AddTransformationsTypePage = async ({ params: { type } }: SearchParamProps) => {
  const transformation = transformationTypes[type];
  const { userId } = await auth();
  if (!userId) redirect('/sign-in')
  const user = await getUserById(userId);
  return (
    <>
      <div>
        <Header title={transformation.title} subtitle={transformation.subTitle} />
      </div>
      <TransformationForm
        action="Add"
        userId={user._id}
        type={transformation.type as TransformationTypeKey}
        creditBalance={user.creditBalance}
      />
    </>
  )
}

export default AddTransformationsTypePage;
