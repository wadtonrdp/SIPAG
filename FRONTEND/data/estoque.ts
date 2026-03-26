export type StatusItem = "Em Estoque" | "Aguardando Peça" | "Em Uso" | "Manutenção";
export type CategoriaItem = "suprimento" | "equipamento";

export interface ItemEstoque {
  id: string;
  nome: string;
  categoria: CategoriaItem;
  status: StatusItem;
}

export const estoqueMock: ItemEstoque[] = [
  { id: "#SIP001", nome: "Carregador",   categoria: "suprimento",  status: "Aguardando Peça" },
  { id: "#SIP002", nome: "Chip VIVO",    categoria: "suprimento",  status: "Aguardando Peça" },
  { id: "#SIP003", nome: "Chip CLARO",   categoria: "suprimento",  status: "Em Estoque"      },
  { id: "#SIP004", nome: "CxBobina",     categoria: "suprimento",  status: "Em Estoque"      },
  { id: "#SIP005", nome: "Placa Pix",    categoria: "suprimento",  status: "Em Estoque"      },
  { id: "#SIP006", nome: "PPC930",       categoria: "equipamento", status: "Aguardando Peça" },
  { id: "#SIP007", nome: "DX8000",       categoria: "equipamento", status: "Aguardando Peça" },
  { id: "#SIP008", nome: "P2",           categoria: "equipamento", status: "Em Estoque"      },
  { id: "#SIP009", nome: "X990",         categoria: "equipamento", status: "Em Estoque"      },
  { id: "#SIP010", nome: "Roteador WiFi",categoria: "equipamento", status: "Em Uso"          },
  { id: "#SIP011", nome: "Cabo USB-C",   categoria: "suprimento",  status: "Em Estoque"      },
  { id: "#SIP012", nome: "Monitor 24\"", categoria: "equipamento", status: "Manutenção"      },
];

// Simula um fetch com filtros, igual a uma query real no banco
export async function fetchItens(params: {
  busca?: string;
  categoria?: string;
}): Promise<ItemEstoque[]> {
  // Simula latência de rede
  await new Promise((res) => setTimeout(res, 300));

  return estoqueMock.filter((item) => {
    const matchCategoria =
      !params.categoria ||
      params.categoria === "todos" ||
      item.categoria === params.categoria;

    const matchBusca =
      !params.busca ||
      item.nome.toLowerCase().includes(params.busca.toLowerCase()) ||
      item.id.toLowerCase().includes(params.busca.toLowerCase());

    return matchCategoria && matchBusca;
  });
}