import React from "react";
import { getPageBySlug } from "@/services/pages";
import PageBlockRenderer from "../components/blocks/PageBlockRenderer";

/**
 * NUEVA PÁGINA - Dinámicamente construida desde el CMS
 * Esta página carga el contenido desde la colección "Pages" del CMS
 * utilizando un sistema de bloques que se renderiza dinámicamente
 */
export async function generateMetadata() {
  try {
    const page = await getPageBySlug("main-page");
    return {
      title: page.title,
      description: page.layout[0]?.description || "",
    };
  } catch (error) {
    return {
      title: "Home",
      description: "Welcome to our site",
    };
  }
}

export default async function Page() {
  try {
    const page = await getPageBySlug("main-page");

    return (
      <div>
        <PageBlockRenderer blocks={page.layout} />
      </div>
    );
  } catch (error) {
    console.error("Error loading page:", error);
    return (
      <div className="flex items-center justify-center min-h-screen bg-neutral-900">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-4">
            Error cargando la página
          </h1>
          <p className="text-neutral-400">
            Por favor, intenta más tarde o contacta con soporte.
          </p>
        </div>
      </div>
    );
  }
}
